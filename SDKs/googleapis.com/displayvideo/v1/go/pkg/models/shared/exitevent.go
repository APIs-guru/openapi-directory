package shared




type ExitEventTypeEnum string

const (
    ExitEventTypeEnumExitEventTypeUnspecified ExitEventTypeEnum = "EXIT_EVENT_TYPE_UNSPECIFIED"
ExitEventTypeEnumExitEventTypeDefault ExitEventTypeEnum = "EXIT_EVENT_TYPE_DEFAULT"
ExitEventTypeEnumExitEventTypeBackup ExitEventTypeEnum = "EXIT_EVENT_TYPE_BACKUP"
)


type ExitEvent struct {
    Name *string `json:"name,omitempty"`
    ReportingName *string `json:"reportingName,omitempty"`
    Type *ExitEventTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

