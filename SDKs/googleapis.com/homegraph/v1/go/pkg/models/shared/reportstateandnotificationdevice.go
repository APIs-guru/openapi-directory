package shared

type ReportStateAndNotificationDevice struct {
	Notifications map[string]interface{} `json:"notifications"`
	States        map[string]interface{} `json:"states"`
}
