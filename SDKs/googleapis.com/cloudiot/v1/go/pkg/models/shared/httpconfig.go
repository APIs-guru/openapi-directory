package shared

type HTTPConfigHTTPEnabledStateEnum string

const (
	HTTPConfigHTTPEnabledStateEnumHTTPStateUnspecified HTTPConfigHTTPEnabledStateEnum = "HTTP_STATE_UNSPECIFIED"
	HTTPConfigHTTPEnabledStateEnumHTTPEnabled          HTTPConfigHTTPEnabledStateEnum = "HTTP_ENABLED"
	HTTPConfigHTTPEnabledStateEnumHTTPDisabled         HTTPConfigHTTPEnabledStateEnum = "HTTP_DISABLED"
)

// HTTPConfig
// The configuration of the HTTP bridge for a device registry.
type HTTPConfig struct {
	HTTPEnabledState *HTTPConfigHTTPEnabledStateEnum `json:"httpEnabledState,omitempty"`
}
