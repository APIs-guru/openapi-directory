package shared

type ItemsTypeEnum string

const (
	ItemsTypeEnumRaw  ItemsTypeEnum = "raw"
	ItemsTypeEnumExt4 ItemsTypeEnum = "ext4"
)

type Items struct {
	Size *int64         `json:"size,omitempty"`
	Type *ItemsTypeEnum `json:"type,omitempty"`
}
