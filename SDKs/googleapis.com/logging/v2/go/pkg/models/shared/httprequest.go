package shared

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
