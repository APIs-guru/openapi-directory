package operations

import (
	"openapi/pkg/models/shared"
)

type PostOfferingsOfferingIDGroupsGroupIDLearnersPathParams struct {
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PostOfferingsOfferingIDGroupsGroupIDLearnersRequestBody struct {
	Email *string `json:"email"`
}

type PostOfferingsOfferingIDGroupsGroupIDLearnersRequest struct {
	PathParams PostOfferingsOfferingIDGroupsGroupIDLearnersPathParams
	Request    PostOfferingsOfferingIDGroupsGroupIDLearnersRequestBody `request:"mediaType=application/json"`
}

type PostOfferingsOfferingIDGroupsGroupIDLearnersResponse struct {
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
	UserResponse *shared.UserResponse
}
