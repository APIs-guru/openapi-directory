package shared

type GoogleAPIServiceusageV1ServiceConfig struct {
	Apis               []API                         `json:"apis"`
	Authentication     *Authentication               `json:"authentication"`
	Documentation      *Documentation                `json:"documentation"`
	Endpoints          []Endpoint                    `json:"endpoints"`
	MonitoredResources []MonitoredResourceDescriptor `json:"monitoredResources"`
	Monitoring         *Monitoring                   `json:"monitoring"`
	Name               *string                       `json:"name"`
	Quota              *Quota                        `json:"quota"`
	Title              *string                       `json:"title"`
	Usage              *Usage                        `json:"usage"`
}
