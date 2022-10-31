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

type DeleteProductsSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteProductsSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type DeleteProductsSecurity struct {
	Option1 *DeleteProductsSecurityOption1 `security:"option"`
	Option2 *DeleteProductsSecurityOption2 `security:"option"`
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
