package shared

type LkeNodePoolDisksTypeEnum string

const (
	LkeNodePoolDisksTypeEnumRaw  LkeNodePoolDisksTypeEnum = "raw"
	LkeNodePoolDisksTypeEnumExt4 LkeNodePoolDisksTypeEnum = "ext4"
)

type LkeNodePoolDisks struct {
	Size *int64                    `json:"size,omitempty"`
	Type *LkeNodePoolDisksTypeEnum `json:"type,omitempty"`
}

type LkeNodePool struct {
	Count *int64             `json:"count,omitempty"`
	Disks []LkeNodePoolDisks `json:"disks,omitempty"`
	ID    *int64             `json:"id,omitempty"`
	Nodes []LkeNodeStatus    `json:"nodes,omitempty"`
	Tags  []string           `json:"tags,omitempty"`
	Type  *string            `json:"type,omitempty"`
}
