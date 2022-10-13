package shared

type ContextRule struct {
	AllowedRequestExtensions  []string `json:"allowedRequestExtensions"`
	AllowedResponseExtensions []string `json:"allowedResponseExtensions"`
	Provided                  []string `json:"provided"`
	Requested                 []string `json:"requested"`
	Selector                  *string  `json:"selector"`
}
