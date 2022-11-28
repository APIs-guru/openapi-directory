package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProductPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
	ProductUUID      string `pathParam:"style=simple,explode=false,name=productUuid"`
}

type DeleteProductSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type DeleteProductRequest struct {
	PathParams DeleteProductPathParams
	Security   DeleteProductSecurity
}

type DeleteProductResponse struct {
	ContentType string
	StatusCode  int64
}
