package shared

type DataLeakPreventionChangeTypeEnum string

const (
	DataLeakPreventionChangeTypeEnumTypeUnspecified DataLeakPreventionChangeTypeEnum = "TYPE_UNSPECIFIED"
	DataLeakPreventionChangeTypeEnumFlagged         DataLeakPreventionChangeTypeEnum = "FLAGGED"
	DataLeakPreventionChangeTypeEnumCleared         DataLeakPreventionChangeTypeEnum = "CLEARED"
)

type DataLeakPreventionChange struct {
	Type *DataLeakPreventionChangeTypeEnum `json:"type,omitempty"`
}
