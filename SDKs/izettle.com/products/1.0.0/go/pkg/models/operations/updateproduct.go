package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProductPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
	ProductUUID      string `pathParam:"style=simple,explode=false,name=productUuid"`
}

type UpdateProductHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type UpdateProductSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type UpdateProductRequest struct {
	PathParams UpdateProductPathParams
	Headers    UpdateProductHeaders
	Request    shared.ProductUpdateRequest `request:"mediaType=application/json"`
	Security   UpdateProductSecurity
}

type UpdateProductResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
