package operations

import (
	"openapi/pkg/models/shared"
)

type CountAllProductsPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type CountAllProductsSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type CountAllProductsRequest struct {
	PathParams CountAllProductsPathParams
	Security   CountAllProductsSecurity
}

type CountAllProductsResponse struct {
	ContentType           string
	ProductCountResponses []shared.ProductCountResponse
	StatusCode            int64
}
