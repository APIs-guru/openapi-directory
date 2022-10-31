package shared

type ContextRule struct {
	AllowedRequestExtensions  []string `json:"allowedRequestExtensions,omitempty"`
	AllowedResponseExtensions []string `json:"allowedResponseExtensions,omitempty"`
	Provided                  []string `json:"provided,omitempty"`
	Requested                 []string `json:"requested,omitempty"`
	Selector                  *string  `json:"selector,omitempty"`
}
