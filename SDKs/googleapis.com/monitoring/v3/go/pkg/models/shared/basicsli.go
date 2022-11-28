package shared

// BasicSli
// An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
type BasicSli struct {
	Availability map[string]interface{} `json:"availability,omitempty"`
	Latency      *LatencyCriteria       `json:"latency,omitempty"`
	Location     []string               `json:"location,omitempty"`
	Method       []string               `json:"method,omitempty"`
	Version      []string               `json:"version,omitempty"`
}
