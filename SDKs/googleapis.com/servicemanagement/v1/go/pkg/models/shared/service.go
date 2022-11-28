package shared

// Service
// `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth
type Service struct {
	Apis               []API                         `json:"apis,omitempty"`
	Authentication     *Authentication               `json:"authentication,omitempty"`
	Backend            *Backend                      `json:"backend,omitempty"`
	Billing            *Billing                      `json:"billing,omitempty"`
	ConfigVersion      *int64                        `json:"configVersion,omitempty"`
	Context            *Context                      `json:"context,omitempty"`
	Control            *Control                      `json:"control,omitempty"`
	CustomError        *CustomError                  `json:"customError,omitempty"`
	Documentation      *Documentation                `json:"documentation,omitempty"`
	Endpoints          []Endpoint                    `json:"endpoints,omitempty"`
	Enums              []Enum                        `json:"enums,omitempty"`
	HTTP               *HTTP                         `json:"http,omitempty"`
	ID                 *string                       `json:"id,omitempty"`
	Logging            *Logging                      `json:"logging,omitempty"`
	Logs               []LogDescriptor               `json:"logs,omitempty"`
	Metrics            []MetricDescriptor            `json:"metrics,omitempty"`
	MonitoredResources []MonitoredResourceDescriptor `json:"monitoredResources,omitempty"`
	Monitoring         *Monitoring                   `json:"monitoring,omitempty"`
	Name               *string                       `json:"name,omitempty"`
	ProducerProjectID  *string                       `json:"producerProjectId,omitempty"`
	Quota              *Quota                        `json:"quota,omitempty"`
	SourceInfo         *SourceInfo                   `json:"sourceInfo,omitempty"`
	SystemParameters   *SystemParameters             `json:"systemParameters,omitempty"`
	SystemTypes        []Type                        `json:"systemTypes,omitempty"`
	Title              *string                       `json:"title,omitempty"`
	Types              []Type                        `json:"types,omitempty"`
	Usage              *Usage                        `json:"usage,omitempty"`
}
