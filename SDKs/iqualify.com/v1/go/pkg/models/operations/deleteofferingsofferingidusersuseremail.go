package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOfferingsOfferingIDUsersUserEmailPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail  string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type DeleteOfferingsOfferingIDUsersUserEmailRequest struct {
	PathParams DeleteOfferingsOfferingIDUsersUserEmailPathParams
}

type DeleteOfferingsOfferingIDUsersUserEmailResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
