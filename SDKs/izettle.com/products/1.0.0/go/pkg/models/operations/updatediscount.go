package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDiscountPathParams struct {
	DiscountUUID     string `pathParam:"style=simple,explode=false,name=discountUuid"`
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type UpdateDiscountHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type UpdateDiscountSecurityOption1 struct {
	ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateDiscountSecurityOption2 struct {
	ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
}

type UpdateDiscountSecurity struct {
	Option1 *UpdateDiscountSecurityOption1 `security:"option"`
	Option2 *UpdateDiscountSecurityOption2 `security:"option"`
}

type UpdateDiscountRequest struct {
	PathParams UpdateDiscountPathParams
	Headers    UpdateDiscountHeaders
	Request    shared.DiscountRequest `request:"mediaType=application/json"`
	Security   UpdateDiscountSecurity
}

type UpdateDiscountResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
