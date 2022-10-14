package operations

import (
	"openapi/pkg/models/shared"
)

type PutOfferingsOfferingIDMetadataTagsPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PutOfferingsOfferingIDMetadataTagsRequestBody struct {
	Tags []string `json:"tags,omitempty"`
}

type PutOfferingsOfferingIDMetadataTagsRequest struct {
	PathParams PutOfferingsOfferingIDMetadataTagsPathParams
	Request    PutOfferingsOfferingIDMetadataTagsRequestBody `request:"mediaType=application/json"`
}

type PutOfferingsOfferingIDMetadataTagsResponse struct {
	ContentType              string
	Error                    *shared.Error
	OfferingMetadataResponse *shared.OfferingMetadataResponse
	StatusCode               int64
}
