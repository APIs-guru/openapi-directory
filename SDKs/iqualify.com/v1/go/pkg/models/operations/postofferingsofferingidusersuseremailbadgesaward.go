package operations

import (
	"openapi/pkg/models/shared"
)

type PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail  string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type PostOfferingsOfferingIDUsersUserEmailBadgesAwardRequest struct {
	PathParams PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams
}

type PostOfferingsOfferingIDUsersUserEmailBadgesAwardResponse struct {
	AwardedResponse *shared.AwardedResponse
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
}
