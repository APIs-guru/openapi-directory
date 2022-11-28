package shared

// HTTPRequest
// A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
type HTTPRequest struct {
	CacheFillBytes                 *string `json:"cacheFillBytes,omitempty"`
	CacheHit                       *bool   `json:"cacheHit,omitempty"`
	CacheLookup                    *bool   `json:"cacheLookup,omitempty"`
	CacheValidatedWithOriginServer *bool   `json:"cacheValidatedWithOriginServer,omitempty"`
	Latency                        *string `json:"latency,omitempty"`
	Protocol                       *string `json:"protocol,omitempty"`
	Referer                        *string `json:"referer,omitempty"`
	RemoteIP                       *string `json:"remoteIp,omitempty"`
	RequestMethod                  *string `json:"requestMethod,omitempty"`
	RequestSize                    *string `json:"requestSize,omitempty"`
	RequestURL                     *string `json:"requestUrl,omitempty"`
	ResponseSize                   *string `json:"responseSize,omitempty"`
	ServerIP                       *string `json:"serverIp,omitempty"`
	Status                         *int32  `json:"status,omitempty"`
	UserAgent                      *string `json:"userAgent,omitempty"`
}
