package operations

import (
	"openapi/pkg/models/shared"
)

type PostOfferingsRequest struct {
	Request shared.OfferingRequired `request:"mediaType=application/json"`
}

type PostOfferingsResponse struct {
	ContentType              string
	Error                    *shared.Error
	OfferingMetadataResponse *shared.OfferingMetadataResponse
	StatusCode               int64
}
