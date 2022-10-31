package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackGroupsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRackGroupsPartialUpdateRequest struct {
	PathParams DcimRackGroupsPartialUpdatePathParams
	Request    shared.WritableRackGroup `request:"mediaType=application/json"`
}

type DcimRackGroupsPartialUpdateResponse struct {
	ContentType string
	RackGroup   *shared.RackGroup
	StatusCode  int64
}
