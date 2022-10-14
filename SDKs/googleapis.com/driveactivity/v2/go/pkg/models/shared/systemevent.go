package shared

type SystemEventTypeEnum string

const (
	SystemEventTypeEnumTypeUnspecified SystemEventTypeEnum = "TYPE_UNSPECIFIED"
	SystemEventTypeEnumUserDeletion    SystemEventTypeEnum = "USER_DELETION"
	SystemEventTypeEnumTrashAutoPurge  SystemEventTypeEnum = "TRASH_AUTO_PURGE"
)

type SystemEvent struct {
	Type *SystemEventTypeEnum `json:"type,omitempty"`
}
