package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsPathParams
}

type GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsResponse struct {
	AssignmentMarkResponses []shared.AssignmentMarkResponse
	ContentType             string
	Error                   *shared.Error
	StatusCode              int64
}
