package shared

type HTTPRequestContext struct {
	Method             *string `json:"method,omitempty"`
	Referrer           *string `json:"referrer,omitempty"`
	RemoteIP           *string `json:"remoteIp,omitempty"`
	ResponseStatusCode *int32  `json:"responseStatusCode,omitempty"`
	URL                *string `json:"url,omitempty"`
	UserAgent          *string `json:"userAgent,omitempty"`
}
