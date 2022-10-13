package shared

type Service struct {
	Apis               []API                         `json:"apis"`
	Authentication     *Authentication               `json:"authentication"`
	Backend            *Backend                      `json:"backend"`
	Billing            *Billing                      `json:"billing"`
	ConfigVersion      *int64                        `json:"configVersion"`
	Context            *Context                      `json:"context"`
	Control            *Control                      `json:"control"`
	CustomError        *CustomError                  `json:"customError"`
	Documentation      *Documentation                `json:"documentation"`
	Endpoints          []Endpoint                    `json:"endpoints"`
	Enums              []Enum                        `json:"enums"`
	HTTP               *HTTP                         `json:"http"`
	ID                 *string                       `json:"id"`
	Logging            *Logging                      `json:"logging"`
	Logs               []LogDescriptor               `json:"logs"`
	Metrics            []MetricDescriptor            `json:"metrics"`
	MonitoredResources []MonitoredResourceDescriptor `json:"monitoredResources"`
	Monitoring         *Monitoring                   `json:"monitoring"`
	Name               *string                       `json:"name"`
	ProducerProjectID  *string                       `json:"producerProjectId"`
	Quota              *Quota                        `json:"quota"`
	SourceInfo         *SourceInfo                   `json:"sourceInfo"`
	SystemParameters   *SystemParameters             `json:"systemParameters"`
	SystemTypes        []Type                        `json:"systemTypes"`
	Title              *string                       `json:"title"`
	Types              []Type                        `json:"types"`
	Usage              *Usage                        `json:"usage"`
}
