package shared

type DomainRedirectTypeEnum string

const (
	DomainRedirectTypeEnumRedirectTypeUnspecified DomainRedirectTypeEnum = "REDIRECT_TYPE_UNSPECIFIED"
	DomainRedirectTypeEnumMovedPermanently        DomainRedirectTypeEnum = "MOVED_PERMANENTLY"
)

// DomainRedirect
// Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
type DomainRedirect struct {
	DomainName *string                 `json:"domainName,omitempty"`
	Type       *DomainRedirectTypeEnum `json:"type,omitempty"`
}
