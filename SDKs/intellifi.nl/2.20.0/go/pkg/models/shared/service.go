package shared

type Service struct {
	BootCount      *int64                 `json:"boot_count"`
	Config         map[string]interface{} `json:"config"`
	ConfigRequest  map[string]interface{} `json:"config_request"`
	ID             *string                `json:"id"`
	Name           *string                `json:"name"`
	RestartRequest *bool                  `json:"restart_request"`
	TimeCreated    *string                `json:"time_created"`
	TimeUpdated    *string                `json:"time_updated"`
	URL            *string                `json:"url"`
	Version        *string                `json:"version"`
}
