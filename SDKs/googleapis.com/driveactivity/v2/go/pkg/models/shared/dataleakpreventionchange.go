package shared

type DataLeakPreventionChangeTypeEnum string

const (
	DataLeakPreventionChangeTypeEnumTypeUnspecified DataLeakPreventionChangeTypeEnum = "TYPE_UNSPECIFIED"
	DataLeakPreventionChangeTypeEnumFlagged         DataLeakPreventionChangeTypeEnum = "FLAGGED"
	DataLeakPreventionChangeTypeEnumCleared         DataLeakPreventionChangeTypeEnum = "CLEARED"
)

// DataLeakPreventionChange
// A change in the object's data leak prevention status.
type DataLeakPreventionChange struct {
	Type *DataLeakPreventionChangeTypeEnum `json:"type,omitempty"`
}
