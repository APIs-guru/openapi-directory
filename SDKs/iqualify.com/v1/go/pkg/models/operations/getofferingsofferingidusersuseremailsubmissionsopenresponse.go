package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail  string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseRequest struct {
	PathParams GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams
}

type GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseResponse struct {
	Assignments []shared.Assignments
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
