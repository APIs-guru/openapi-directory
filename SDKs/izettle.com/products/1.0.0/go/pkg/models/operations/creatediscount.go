package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDiscountPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type CreateDiscountSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type CreateDiscountRequest struct {
	PathParams CreateDiscountPathParams
	Request    *shared.DiscountRequest `request:"mediaType=application/json"`
	Security   CreateDiscountSecurity
}

type CreateDiscountResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
