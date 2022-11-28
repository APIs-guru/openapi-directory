package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProductsPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type DeleteProductsQueryParams struct {
	UUID []string `queryParam:"style=form,explode=true,name=uuid"`
}

type DeleteProductsSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type DeleteProductsRequest struct {
	PathParams  DeleteProductsPathParams
	QueryParams DeleteProductsQueryParams
	Security    DeleteProductsSecurity
}

type DeleteProductsResponse struct {
	ContentType string
	StatusCode  int64
}
