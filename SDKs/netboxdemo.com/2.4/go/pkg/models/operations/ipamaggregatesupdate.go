package operations

import (
	"openapi/pkg/models/shared"
)

type IpamAggregatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamAggregatesUpdateRequest struct {
	PathParams IpamAggregatesUpdatePathParams
	Request    shared.WritableAggregate `request:"mediaType=application/json"`
}

type IpamAggregatesUpdateResponse struct {
	Aggregate   *shared.Aggregate
	ContentType string
	StatusCode  int64
}
