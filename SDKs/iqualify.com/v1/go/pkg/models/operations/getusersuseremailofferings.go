package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserEmailOfferingsPathParams struct {
	UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type GetUsersUserEmailOfferingsRequest struct {
	PathParams GetUsersUserEmailOfferingsPathParams
}

type GetUsersUserEmailOfferingsResponse struct {
	ContentType               string
	Error                     *shared.Error
	OfferingMetadataResponses []shared.OfferingMetadataResponse
	StatusCode                int64
}
