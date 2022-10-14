package shared

type URIOverrideSchemeEnum string

const (
	URIOverrideSchemeEnumSchemeUnspecified URIOverrideSchemeEnum = "SCHEME_UNSPECIFIED"
	URIOverrideSchemeEnumHTTP              URIOverrideSchemeEnum = "HTTP"
	URIOverrideSchemeEnumHTTPS             URIOverrideSchemeEnum = "HTTPS"
)

type URIOverride struct {
	Host   *string                `json:"host,omitempty"`
	Path   *string                `json:"path,omitempty"`
	Port   *string                `json:"port,omitempty"`
	Query  *string                `json:"query,omitempty"`
	Scheme *URIOverrideSchemeEnum `json:"scheme,omitempty"`
}
