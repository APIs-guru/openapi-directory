package shared

// HTTPRequestContext
// HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
type HTTPRequestContext struct {
	Method             *string `json:"method,omitempty"`
	Referrer           *string `json:"referrer,omitempty"`
	RemoteIP           *string `json:"remoteIp,omitempty"`
	ResponseStatusCode *int32  `json:"responseStatusCode,omitempty"`
	URL                *string `json:"url,omitempty"`
	UserAgent          *string `json:"userAgent,omitempty"`
}
