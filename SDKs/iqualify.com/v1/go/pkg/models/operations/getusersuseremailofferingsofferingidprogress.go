package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserEmailOfferingsOfferingIDProgressPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail  string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type GetUsersUserEmailOfferingsOfferingIDProgressRequest struct {
	PathParams GetUsersUserEmailOfferingsOfferingIDProgressPathParams
}

type GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON struct {
	Completion *string `json:"completion"`
	Email      *string `json:"email"`
	FirstName  *string `json:"firstName"`
	ID         *string `json:"id"`
	LastName   *string `json:"lastName"`
}

type GetUsersUserEmailOfferingsOfferingIDProgressResponse struct {
	ContentType                                                          string
	Error                                                                *shared.Error
	GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSONObject *GetUsersUserEmailOfferingsOfferingIDProgress200ApplicationJSON
	StatusCode                                                           int64
}
