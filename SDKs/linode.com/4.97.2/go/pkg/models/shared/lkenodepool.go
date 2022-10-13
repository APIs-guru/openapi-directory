package shared

type LkeNodePoolDisksTypeEnum string

const (
	LkeNodePoolDisksTypeEnumRaw  LkeNodePoolDisksTypeEnum = "raw"
	LkeNodePoolDisksTypeEnumExt4 LkeNodePoolDisksTypeEnum = "ext4"
)

type LkeNodePoolDisks struct {
	Size *int64                    `json:"size"`
	Type *LkeNodePoolDisksTypeEnum `json:"type"`
}

type LkeNodePool struct {
	Count *int64             `json:"count"`
	Disks []LkeNodePoolDisks `json:"disks"`
	ID    *int64             `json:"id"`
	Nodes []LkeNodeStatus    `json:"nodes"`
	Tags  []string           `json:"tags"`
	Type  *string            `json:"type"`
}
