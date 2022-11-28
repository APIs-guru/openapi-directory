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

// HTTPRouteRedirect
// The specification for redirecting traffic.
type HTTPRouteRedirect struct {
	HostRedirect  *string                            `json:"hostRedirect,omitempty"`
	HTTPSRedirect *bool                              `json:"httpsRedirect,omitempty"`
	PathRedirect  *string                            `json:"pathRedirect,omitempty"`
	PortRedirect  *int32                             `json:"portRedirect,omitempty"`
	PrefixRewrite *string                            `json:"prefixRewrite,omitempty"`
	ResponseCode  *HTTPRouteRedirectResponseCodeEnum `json:"responseCode,omitempty"`
	StripQuery    *bool                              `json:"stripQuery,omitempty"`
}
