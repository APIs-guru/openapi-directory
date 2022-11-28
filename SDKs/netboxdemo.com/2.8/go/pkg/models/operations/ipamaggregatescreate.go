package operations

import (
	"openapi/pkg/models/shared"
)

type IpamAggregatesCreateRequest struct {
	Request shared.WritableAggregateInput `request:"mediaType=application/json"`
}

type IpamAggregatesCreateResponse struct {
	Aggregate   *shared.Aggregate
	ContentType string
	StatusCode  int64
}
