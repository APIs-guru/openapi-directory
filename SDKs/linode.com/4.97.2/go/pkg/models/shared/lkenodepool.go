package shared

type LkeNodePoolDisksTypeEnum string

const (
	LkeNodePoolDisksTypeEnumRaw  LkeNodePoolDisksTypeEnum = "raw"
	LkeNodePoolDisksTypeEnumExt4 LkeNodePoolDisksTypeEnum = "ext4"
)

// LkeNodePoolDisks
// The values to assign to each partition in this Node Pool's custom disk layout.
type LkeNodePoolDisks struct {
	Size *int64                    `json:"size,omitempty"`
	Type *LkeNodePoolDisksTypeEnum `json:"type,omitempty"`
}

// LkeNodePool
// The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
type LkeNodePool struct {
	Count *int64             `json:"count,omitempty"`
	Disks []LkeNodePoolDisks `json:"disks,omitempty"`
	ID    *int64             `json:"id,omitempty"`
	Nodes []LkeNodeStatus    `json:"nodes,omitempty"`
	Tags  []string           `json:"tags,omitempty"`
	Type  *string            `json:"type,omitempty"`
}
