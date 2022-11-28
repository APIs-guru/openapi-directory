package shared

type SystemEventTypeEnum string

const (
	SystemEventTypeEnumTypeUnspecified SystemEventTypeEnum = "TYPE_UNSPECIFIED"
	SystemEventTypeEnumUserDeletion    SystemEventTypeEnum = "USER_DELETION"
	SystemEventTypeEnumTrashAutoPurge  SystemEventTypeEnum = "TRASH_AUTO_PURGE"
)

// SystemEvent
// Event triggered by system operations instead of end users.
type SystemEvent struct {
	Type *SystemEventTypeEnum `json:"type,omitempty"`
}
