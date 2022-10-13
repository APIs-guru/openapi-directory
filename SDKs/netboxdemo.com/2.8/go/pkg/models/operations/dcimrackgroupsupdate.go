package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackGroupsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRackGroupsUpdateRequest struct {
	PathParams DcimRackGroupsUpdatePathParams
	Request    shared.WritableRackGroup `request:"mediaType=application/json"`
}

type DcimRackGroupsUpdateResponse struct {
	ContentType string
	RackGroup   *shared.RackGroup
	StatusCode  int64
}
