package operations

import (
	"openapi/pkg/models/shared"
)

type PutOfferingsOfferingIDMetadataLevelPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PutOfferingsOfferingIDMetadataLevelRequestBody struct {
	Level *string `json:"level,omitempty"`
}

type PutOfferingsOfferingIDMetadataLevelRequest struct {
	PathParams PutOfferingsOfferingIDMetadataLevelPathParams
	Request    PutOfferingsOfferingIDMetadataLevelRequestBody `request:"mediaType=application/json"`
}

type PutOfferingsOfferingIDMetadataLevelResponse struct {
	ContentType              string
	Error                    *shared.Error
	OfferingMetadataResponse *shared.OfferingMetadataResponse
	StatusCode               int64
}
