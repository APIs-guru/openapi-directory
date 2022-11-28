package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductTypesPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetProductTypesSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetProductTypesRequest struct {
	PathParams GetProductTypesPathParams
	Security   GetProductTypesSecurity
}

type GetProductTypesResponse struct {
	CategoryResponse *shared.CategoryResponse
	ContentType      string
	StatusCode       int64
}
