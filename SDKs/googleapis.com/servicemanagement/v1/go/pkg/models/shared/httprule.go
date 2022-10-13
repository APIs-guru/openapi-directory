package shared

type HTTPRule struct {
	AdditionalBindings []HTTPRule         `json:"additionalBindings"`
	Body               *string            `json:"body"`
	Custom             *CustomHTTPPattern `json:"custom"`
	Delete             *string            `json:"delete"`
	Get                *string            `json:"get"`
	Patch              *string            `json:"patch"`
	Post               *string            `json:"post"`
	Put                *string            `json:"put"`
	ResponseBody       *string            `json:"responseBody"`
	Selector           *string            `json:"selector"`
}
