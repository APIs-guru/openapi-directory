package shared

type RestoreTypeEnum string

const (
	RestoreTypeEnumTypeUnspecified RestoreTypeEnum = "TYPE_UNSPECIFIED"
	RestoreTypeEnumUntrash         RestoreTypeEnum = "UNTRASH"
)

// Restore
// A deleted object was restored.
type Restore struct {
	Type *RestoreTypeEnum `json:"type,omitempty"`
}
