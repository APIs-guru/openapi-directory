package shared

type DicomStore struct {
	Labels             map[string]string   `json:"labels"`
	Name               *string             `json:"name"`
	NotificationConfig *NotificationConfig `json:"notificationConfig"`
}
