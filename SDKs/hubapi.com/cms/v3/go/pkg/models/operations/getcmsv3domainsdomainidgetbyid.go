package operations

import (
	"openapi/pkg/models/shared"
)

type GetCmsV3DomainsDomainIDGetByIDPathParams struct {
	DomainID string `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetCmsV3DomainsDomainIDGetByIDSecurity struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetCmsV3DomainsDomainIDGetByIDRequest struct {
	PathParams GetCmsV3DomainsDomainIDGetByIDPathParams
	Security   GetCmsV3DomainsDomainIDGetByIDSecurity
}

type GetCmsV3DomainsDomainIDGetByIDResponse struct {
	Body        []byte
	ContentType string
	Domain      *shared.Domain
	StatusCode  int64
}
