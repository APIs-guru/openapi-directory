package shared

type ExitEventTypeEnum string

const (
	ExitEventTypeEnumExitEventTypeUnspecified ExitEventTypeEnum = "EXIT_EVENT_TYPE_UNSPECIFIED"
	ExitEventTypeEnumExitEventTypeDefault     ExitEventTypeEnum = "EXIT_EVENT_TYPE_DEFAULT"
	ExitEventTypeEnumExitEventTypeBackup      ExitEventTypeEnum = "EXIT_EVENT_TYPE_BACKUP"
)

type ExitEvent struct {
	Name          *string            `json:"name"`
	ReportingName *string            `json:"reportingName"`
	Type          *ExitEventTypeEnum `json:"type"`
	URL           *string            `json:"url"`
}
