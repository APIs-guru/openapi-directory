package shared



type HTTPRouteRouteAction struct {
    CorsPolicy *HTTPRouteCorsPolicy `json:"corsPolicy,omitempty"`
    Destinations []HTTPRouteDestination `json:"destinations,omitempty"`
    FaultInjectionPolicy *HTTPRouteFaultInjectionPolicy `json:"faultInjectionPolicy,omitempty"`
    Redirect *HTTPRouteRedirect `json:"redirect,omitempty"`
    RequestHeaderModifier *HTTPRouteHeaderModifier `json:"requestHeaderModifier,omitempty"`
    RequestMirrorPolicy *HTTPRouteRequestMirrorPolicy `json:"requestMirrorPolicy,omitempty"`
    ResponseHeaderModifier *HTTPRouteHeaderModifier `json:"responseHeaderModifier,omitempty"`
    RetryPolicy *HTTPRouteRetryPolicy `json:"retryPolicy,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    URLRewrite *HTTPRouteURLRewrite `json:"urlRewrite,omitempty"`
    
}

