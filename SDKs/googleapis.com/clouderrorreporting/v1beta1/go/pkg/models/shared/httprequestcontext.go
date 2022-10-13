package shared

type HTTPRequestContext struct {
	Method             *string `json:"method"`
	Referrer           *string `json:"referrer"`
	RemoteIP           *string `json:"remoteIp"`
	ResponseStatusCode *int32  `json:"responseStatusCode"`
	URL                *string `json:"url"`
	UserAgent          *string `json:"userAgent"`
}
