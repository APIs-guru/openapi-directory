package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackGroupsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRackGroupsReadRequest struct {
	PathParams DcimRackGroupsReadPathParams
}

type DcimRackGroupsReadResponse struct {
	ContentType string
	RackGroup   *shared.RackGroup
	StatusCode  int64
}
