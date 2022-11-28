package shared

type ItemsTypeEnum string

const (
	ItemsTypeEnumRaw  ItemsTypeEnum = "raw"
	ItemsTypeEnumExt4 ItemsTypeEnum = "ext4"
)

// Items
// The values to assign to each partition in this Node Pool's custom disk layout.
type Items struct {
	Size *int64         `json:"size,omitempty"`
	Type *ItemsTypeEnum `json:"type,omitempty"`
}
