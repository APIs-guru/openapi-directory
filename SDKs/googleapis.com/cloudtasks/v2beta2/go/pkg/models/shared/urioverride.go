package shared

type URIOverrideSchemeEnum string

const (
	URIOverrideSchemeEnumSchemeUnspecified URIOverrideSchemeEnum = "SCHEME_UNSPECIFIED"
	URIOverrideSchemeEnumHTTP              URIOverrideSchemeEnum = "HTTP"
	URIOverrideSchemeEnumHTTPS             URIOverrideSchemeEnum = "HTTPS"
)

type URIOverride struct {
	Host   *string                `json:"host"`
	Path   *string                `json:"path"`
	Port   *string                `json:"port"`
	Query  *string                `json:"query"`
	Scheme *URIOverrideSchemeEnum `json:"scheme"`
}
