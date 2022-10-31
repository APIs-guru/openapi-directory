package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailPathParams struct {
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail  string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailRequest struct {
	PathParams DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailPathParams
}

type DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmailResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
