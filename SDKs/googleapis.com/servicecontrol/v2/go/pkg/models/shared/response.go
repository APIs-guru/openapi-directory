package shared

type Response struct {
	BackendLatency *string           `json:"backendLatency"`
	Code           *string           `json:"code"`
	Headers        map[string]string `json:"headers"`
	Size           *string           `json:"size"`
	Time           *string           `json:"time"`
}
