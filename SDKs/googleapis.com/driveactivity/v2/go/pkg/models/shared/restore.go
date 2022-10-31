package shared

type RestoreTypeEnum string

const (
	RestoreTypeEnumTypeUnspecified RestoreTypeEnum = "TYPE_UNSPECIFIED"
	RestoreTypeEnumUntrash         RestoreTypeEnum = "UNTRASH"
)

type Restore struct {
	Type *RestoreTypeEnum `json:"type,omitempty"`
}
