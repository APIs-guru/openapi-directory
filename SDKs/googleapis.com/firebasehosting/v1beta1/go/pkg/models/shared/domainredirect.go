package shared

type DomainRedirectTypeEnum string

const (
	DomainRedirectTypeEnumRedirectTypeUnspecified DomainRedirectTypeEnum = "REDIRECT_TYPE_UNSPECIFIED"
	DomainRedirectTypeEnumMovedPermanently        DomainRedirectTypeEnum = "MOVED_PERMANENTLY"
)

type DomainRedirect struct {
	DomainName *string                 `json:"domainName"`
	Type       *DomainRedirectTypeEnum `json:"type"`
}
