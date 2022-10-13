package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDUsersPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDUsersFacilitatorsEnum string

const (
	GetOfferingsOfferingIDUsersFacilitatorsEnumTrue  GetOfferingsOfferingIDUsersFacilitatorsEnum = "true"
	GetOfferingsOfferingIDUsersFacilitatorsEnumFalse GetOfferingsOfferingIDUsersFacilitatorsEnum = "false"
)

type GetOfferingsOfferingIDUsersLearnersEnum string

const (
	GetOfferingsOfferingIDUsersLearnersEnumTrue  GetOfferingsOfferingIDUsersLearnersEnum = "true"
	GetOfferingsOfferingIDUsersLearnersEnumFalse GetOfferingsOfferingIDUsersLearnersEnum = "false"
)

type GetOfferingsOfferingIDUsersMarkersEnum string

const (
	GetOfferingsOfferingIDUsersMarkersEnumTrue  GetOfferingsOfferingIDUsersMarkersEnum = "true"
	GetOfferingsOfferingIDUsersMarkersEnumFalse GetOfferingsOfferingIDUsersMarkersEnum = "false"
)

type GetOfferingsOfferingIDUsersQueryParams struct {
	Facilitators *GetOfferingsOfferingIDUsersFacilitatorsEnum `queryParam:"style=form,explode=true,name=facilitators"`
	Learners     *GetOfferingsOfferingIDUsersLearnersEnum     `queryParam:"style=form,explode=true,name=learners"`
	Markers      *GetOfferingsOfferingIDUsersMarkersEnum      `queryParam:"style=form,explode=true,name=markers"`
}

type GetOfferingsOfferingIDUsersRequest struct {
	PathParams  GetOfferingsOfferingIDUsersPathParams
	QueryParams GetOfferingsOfferingIDUsersQueryParams
}

type GetOfferingsOfferingIDUsersResponse struct {
	ContentType           string
	Error                 *shared.Error
	OfferingUserResponses []shared.OfferingUserResponse
	StatusCode            int64
}
