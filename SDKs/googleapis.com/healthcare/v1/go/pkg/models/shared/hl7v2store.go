package shared

type Hl7V2Store struct {
	Labels                 map[string]string         `json:"labels"`
	Name                   *string                   `json:"name"`
	NotificationConfigs    []Hl7V2NotificationConfig `json:"notificationConfigs"`
	ParserConfig           *ParserConfig             `json:"parserConfig"`
	RejectDuplicateMessage *bool                     `json:"rejectDuplicateMessage"`
}
