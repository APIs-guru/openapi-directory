package shared

type HTTPRequest struct {
	CacheFillBytes                 *string `json:"cacheFillBytes"`
	CacheHit                       *bool   `json:"cacheHit"`
	CacheLookup                    *bool   `json:"cacheLookup"`
	CacheValidatedWithOriginServer *bool   `json:"cacheValidatedWithOriginServer"`
	Latency                        *string `json:"latency"`
	Protocol                       *string `json:"protocol"`
	Referer                        *string `json:"referer"`
	RemoteIP                       *string `json:"remoteIp"`
	RequestMethod                  *string `json:"requestMethod"`
	RequestSize                    *string `json:"requestSize"`
	RequestURL                     *string `json:"requestUrl"`
	ResponseSize                   *string `json:"responseSize"`
	ServerIP                       *string `json:"serverIp"`
	Status                         *int32  `json:"status"`
	UserAgent                      *string `json:"userAgent"`
}
