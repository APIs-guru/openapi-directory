package shared



type Service struct {
    Apis []API `json:"apis,omitempty"`
    Authentication *Authentication `json:"authentication,omitempty"`
    Backend *Backend `json:"backend,omitempty"`
    Billing *Billing `json:"billing,omitempty"`
    ConfigVersion *int64 `json:"configVersion,omitempty"`
    Context *Context `json:"context,omitempty"`
    Control *Control `json:"control,omitempty"`
    CustomError *CustomError `json:"customError,omitempty"`
    Documentation *Documentation `json:"documentation,omitempty"`
    Endpoints []Endpoint `json:"endpoints,omitempty"`
    Enums []Enum `json:"enums,omitempty"`
    HTTP *HTTP `json:"http,omitempty"`
    ID *string `json:"id,omitempty"`
    Logging *Logging `json:"logging,omitempty"`
    Logs []LogDescriptor `json:"logs,omitempty"`
    Metrics []MetricDescriptor `json:"metrics,omitempty"`
    MonitoredResources []MonitoredResourceDescriptor `json:"monitoredResources,omitempty"`
    Monitoring *Monitoring `json:"monitoring,omitempty"`
    Name *string `json:"name,omitempty"`
    ProducerProjectID *string `json:"producerProjectId,omitempty"`
    Quota *Quota `json:"quota,omitempty"`
    SourceInfo *SourceInfo `json:"sourceInfo,omitempty"`
    SystemParameters *SystemParameters `json:"systemParameters,omitempty"`
    SystemTypes []Type `json:"systemTypes,omitempty"`
    Title *string `json:"title,omitempty"`
    Types []Type `json:"types,omitempty"`
    Usage *Usage `json:"usage,omitempty"`
    
}

