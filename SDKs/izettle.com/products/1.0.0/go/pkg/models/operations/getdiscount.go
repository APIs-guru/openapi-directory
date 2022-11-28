package operations

import (
	"openapi/pkg/models/shared"
)

type GetDiscountPathParams struct {
	DiscountUUID     string `pathParam:"style=simple,explode=false,name=discountUuid"`
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetDiscountHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetDiscountSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetDiscountRequest struct {
	PathParams GetDiscountPathParams
	Headers    GetDiscountHeaders
	Security   GetDiscountSecurity
}

type GetDiscountResponse struct {
	ContentType      string
	DiscountResponse *shared.DiscountResponse
	Headers          map[string][]string
	StatusCode       int64
}
