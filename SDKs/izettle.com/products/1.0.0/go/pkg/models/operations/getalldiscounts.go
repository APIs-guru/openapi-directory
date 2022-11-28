package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllDiscountsPathParams struct {
	OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
}

type GetAllDiscountsSecurity struct {
	ZettleAPIKey *shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
	ZettleOauth  *shared.SchemeZettleOauth  `security:"scheme,type=oauth2"`
}

type GetAllDiscountsRequest struct {
	PathParams GetAllDiscountsPathParams
	Security   GetAllDiscountsSecurity
}

type GetAllDiscountsResponse struct {
	ContentType       string
	DiscountResponses []shared.DiscountResponse
	StatusCode        int64
}
