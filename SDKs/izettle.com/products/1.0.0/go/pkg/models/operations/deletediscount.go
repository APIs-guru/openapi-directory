package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDiscountPathParams struct {
	DiscountUUID     string `pathParam:"style=simple,explode=false,name=discountUuid"`
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type DeleteDiscountSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type DeleteDiscountRequest struct {
	PathParams DeleteDiscountPathParams
	Security   DeleteDiscountSecurity
}

type DeleteDiscountResponse struct {
	ContentType string
	StatusCode  int64
}
