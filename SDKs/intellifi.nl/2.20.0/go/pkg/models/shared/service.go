package shared

type Service struct {
	BootCount      *int64                 `json:"boot_count,omitempty"`
	Config         map[string]interface{} `json:"config,omitempty"`
	ConfigRequest  map[string]interface{} `json:"config_request,omitempty"`
	ID             *string                `json:"id,omitempty"`
	Name           *string                `json:"name,omitempty"`
	RestartRequest *bool                  `json:"restart_request,omitempty"`
	TimeCreated    *string                `json:"time_created,omitempty"`
	TimeUpdated    *string                `json:"time_updated,omitempty"`
	URL            *string                `json:"url,omitempty"`
	Version        *string                `json:"version,omitempty"`
}
