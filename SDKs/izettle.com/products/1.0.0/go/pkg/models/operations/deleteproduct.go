package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProductPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
	ProductUUID      string `pathParam:"style=simple,explode=false,name=productUuid"`
}

type DeleteProductSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteProductSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type DeleteProductSecurity struct {
	Option1 *DeleteProductSecurityOption1 `security:"option"`
	Option2 *DeleteProductSecurityOption2 `security:"option"`
}

type DeleteProductRequest struct {
	PathParams DeleteProductPathParams
	Security   DeleteProductSecurity
}

type DeleteProductResponse struct {
	ContentType string
	StatusCode  int64
}
