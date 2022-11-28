package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProductPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type CreateProductQueryParams struct {
	ReturnEntity *bool `queryParam:"style=form,explode=true,name=returnEntity"`
}

type CreateProductSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type CreateProductRequest struct {
	PathParams  CreateProductPathParams
	QueryParams CreateProductQueryParams
	Request     shared.ProductCreateRequest `request:"mediaType=application/json"`
	Security    CreateProductSecurity
}

type CreateProductResponse struct {
	ContentType     string
	Headers         map[string][]string
	ProductResponse *shared.ProductResponse
	StatusCode      int64
}
