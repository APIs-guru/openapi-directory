package shared

type HTTPRouteRouteAction struct {
	CorsPolicy             *HTTPRouteCorsPolicy           `json:"corsPolicy"`
	Destinations           []HTTPRouteDestination         `json:"destinations"`
	FaultInjectionPolicy   *HTTPRouteFaultInjectionPolicy `json:"faultInjectionPolicy"`
	Redirect               *HTTPRouteRedirect             `json:"redirect"`
	RequestHeaderModifier  *HTTPRouteHeaderModifier       `json:"requestHeaderModifier"`
	RequestMirrorPolicy    *HTTPRouteRequestMirrorPolicy  `json:"requestMirrorPolicy"`
	ResponseHeaderModifier *HTTPRouteHeaderModifier       `json:"responseHeaderModifier"`
	RetryPolicy            *HTTPRouteRetryPolicy          `json:"retryPolicy"`
	Timeout                *string                        `json:"timeout"`
	URLRewrite             *HTTPRouteURLRewrite           `json:"urlRewrite"`
}
