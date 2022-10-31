package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDActivitiesOpenresponsePathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDActivitiesOpenresponseRequest struct {
	PathParams GetOfferingsOfferingIDActivitiesOpenresponsePathParams
}

type GetOfferingsOfferingIDActivitiesOpenresponseResponse struct {
	ContentType                 string
	Error                       *shared.Error
	OfferingActivitiesResponses []shared.OfferingActivitiesResponse
	StatusCode                  int64
}
