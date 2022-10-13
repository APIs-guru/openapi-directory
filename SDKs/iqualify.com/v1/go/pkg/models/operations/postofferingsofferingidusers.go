package operations

import (
	"openapi/pkg/models/shared"
)

type PostOfferingsOfferingIDUsersPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PostOfferingsOfferingIDUsersRequest struct {
	PathParams PostOfferingsOfferingIDUsersPathParams
	Request    []shared.OfferingUser `request:"mediaType=application/json"`
}

type PostOfferingsOfferingIDUsersResponse struct {
	ContentType                                           string
	Error                                                 *shared.Error
	OfferingUserAddResponses                              []shared.OfferingUserAddResponse
	PostOfferingsOfferingIDUsers207ApplicationJSONOneoves []interface{}
	StatusCode                                            int64
}
