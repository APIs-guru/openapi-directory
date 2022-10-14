package operations

import (
	"openapi/pkg/models/shared"
)

type PutOfferingsOfferingIDMetadataCategoryPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PutOfferingsOfferingIDMetadataCategoryRequestBody struct {
	Category *string `json:"category,omitempty"`
}

type PutOfferingsOfferingIDMetadataCategoryRequest struct {
	PathParams PutOfferingsOfferingIDMetadataCategoryPathParams
	Request    PutOfferingsOfferingIDMetadataCategoryRequestBody `request:"mediaType=application/json"`
}

type PutOfferingsOfferingIDMetadataCategoryResponse struct {
	ContentType              string
	Error                    *shared.Error
	OfferingMetadataResponse *shared.OfferingMetadataResponse
	StatusCode               int64
}
