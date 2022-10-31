package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
	ProductUUID      string `pathParam:"style=simple,explode=false,name=productUuid"`
}

type GetProductHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetProductSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetProductSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type GetProductSecurity struct {
	Option1 *GetProductSecurityOption1 `security:"option"`
	Option2 *GetProductSecurityOption2 `security:"option"`
}

type GetProductRequest struct {
	PathParams GetProductPathParams
	Headers    GetProductHeaders
	Security   GetProductSecurity
}

type GetProductResponse struct {
	ContentType     string
	Headers         map[string][]string
	ProductResponse *shared.ProductResponse
	StatusCode      int64
}
