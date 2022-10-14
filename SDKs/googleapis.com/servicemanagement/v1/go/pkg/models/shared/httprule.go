package shared

type HTTPRule struct {
	AdditionalBindings []HTTPRule         `json:"additionalBindings,omitempty"`
	Body               *string            `json:"body,omitempty"`
	Custom             *CustomHTTPPattern `json:"custom,omitempty"`
	Delete             *string            `json:"delete,omitempty"`
	Get                *string            `json:"get,omitempty"`
	Patch              *string            `json:"patch,omitempty"`
	Post               *string            `json:"post,omitempty"`
	Put                *string            `json:"put,omitempty"`
	ResponseBody       *string            `json:"responseBody,omitempty"`
	Selector           *string            `json:"selector,omitempty"`
}
