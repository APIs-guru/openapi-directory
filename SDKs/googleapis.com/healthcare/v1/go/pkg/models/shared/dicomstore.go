package shared

// DicomStore
// Represents a DICOM store.
type DicomStore struct {
	Labels             map[string]string   `json:"labels,omitempty"`
	Name               *string             `json:"name,omitempty"`
	NotificationConfig *NotificationConfig `json:"notificationConfig,omitempty"`
}
