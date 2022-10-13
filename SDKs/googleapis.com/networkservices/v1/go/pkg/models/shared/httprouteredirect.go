package shared

type HTTPRouteRedirectResponseCodeEnum string

const (
	HTTPRouteRedirectResponseCodeEnumResponseCodeUnspecified HTTPRouteRedirectResponseCodeEnum = "RESPONSE_CODE_UNSPECIFIED"
	HTTPRouteRedirectResponseCodeEnumMovedPermanentlyDefault HTTPRouteRedirectResponseCodeEnum = "MOVED_PERMANENTLY_DEFAULT"
	HTTPRouteRedirectResponseCodeEnumFound                   HTTPRouteRedirectResponseCodeEnum = "FOUND"
	HTTPRouteRedirectResponseCodeEnumSeeOther                HTTPRouteRedirectResponseCodeEnum = "SEE_OTHER"
	HTTPRouteRedirectResponseCodeEnumTemporaryRedirect       HTTPRouteRedirectResponseCodeEnum = "TEMPORARY_REDIRECT"
	HTTPRouteRedirectResponseCodeEnumPermanentRedirect       HTTPRouteRedirectResponseCodeEnum = "PERMANENT_REDIRECT"
)

type HTTPRouteRedirect struct {
	HostRedirect  *string                            `json:"hostRedirect"`
	HTTPSRedirect *bool                              `json:"httpsRedirect"`
	PathRedirect  *string                            `json:"pathRedirect"`
	PortRedirect  *int32                             `json:"portRedirect"`
	PrefixRewrite *string                            `json:"prefixRewrite"`
	ResponseCode  *HTTPRouteRedirectResponseCodeEnum `json:"responseCode"`
	StripQuery    *bool                              `json:"stripQuery"`
}
