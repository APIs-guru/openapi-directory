package operations

import (
	"openapi/pkg/models/shared"
)

type GetProducersQueryParams struct {
	ExternalID *string `queryParam:"style=form,explode=true,name=external_id"`
}

type GetProducers200ApplicationJSON struct {
	Producers []shared.ProducerV1 `json:"producers,omitempty"`
}

type GetProducersRequest struct {
	QueryParams GetProducersQueryParams
}

type GetProducersResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetProducers200ApplicationJSONObject *GetProducers200ApplicationJSON
}
