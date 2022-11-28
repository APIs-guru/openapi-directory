package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllProductsInPosPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetAllProductsInPosSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetAllProductsInPosRequest struct {
	PathParams GetAllProductsInPosPathParams
	Security   GetAllProductsInPosSecurity
}

type GetAllProductsInPosResponse struct {
	ContentType      string
	ProductResponses []shared.ProductResponse
	StatusCode       int64
}
