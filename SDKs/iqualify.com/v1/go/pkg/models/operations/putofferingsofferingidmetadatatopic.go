package operations

import (
	"openapi/pkg/models/shared"
)

type PutOfferingsOfferingIDMetadataTopicPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PutOfferingsOfferingIDMetadataTopicRequestBody struct {
	Topic *string `json:"topic,omitempty"`
}

type PutOfferingsOfferingIDMetadataTopicRequest struct {
	PathParams PutOfferingsOfferingIDMetadataTopicPathParams
	Request    PutOfferingsOfferingIDMetadataTopicRequestBody `request:"mediaType=application/json"`
}

type PutOfferingsOfferingIDMetadataTopicResponse struct {
	ContentType              string
	Error                    *shared.Error
	OfferingMetadataResponse *shared.OfferingMetadataResponse
	StatusCode               int64
}
