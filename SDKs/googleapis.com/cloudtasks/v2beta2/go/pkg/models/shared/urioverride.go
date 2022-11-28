package shared

type URIOverrideSchemeEnum string

const (
	URIOverrideSchemeEnumSchemeUnspecified URIOverrideSchemeEnum = "SCHEME_UNSPECIFIED"
	URIOverrideSchemeEnumHTTP              URIOverrideSchemeEnum = "HTTP"
	URIOverrideSchemeEnumHTTPS             URIOverrideSchemeEnum = "HTTPS"
)

type URIOverrideURIOverrideEnforceModeEnum string

const (
	URIOverrideURIOverrideEnforceModeEnumURIOverrideEnforceModeUnspecified URIOverrideURIOverrideEnforceModeEnum = "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
	URIOverrideURIOverrideEnforceModeEnumIfNotExists                       URIOverrideURIOverrideEnforceModeEnum = "IF_NOT_EXISTS"
	URIOverrideURIOverrideEnforceModeEnumAlways                            URIOverrideURIOverrideEnforceModeEnum = "ALWAYS"
)

// URIOverride
// Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
type URIOverride struct {
	Host                   *string                                `json:"host,omitempty"`
	Path                   *string                                `json:"path,omitempty"`
	Port                   *string                                `json:"port,omitempty"`
	Query                  *string                                `json:"query,omitempty"`
	Scheme                 *URIOverrideSchemeEnum                 `json:"scheme,omitempty"`
	URIOverrideEnforceMode *URIOverrideURIOverrideEnforceModeEnum `json:"uriOverrideEnforceMode,omitempty"`
}
