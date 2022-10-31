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

type CreateProductSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CreateProductSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type CreateProductSecurity struct {
	Option1 *CreateProductSecurityOption1 `security:"option"`
	Option2 *CreateProductSecurityOption2 `security:"option"`
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
