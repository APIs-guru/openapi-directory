package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackRolesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRackRolesPartialUpdateRequest struct {
	PathParams DcimRackRolesPartialUpdatePathParams
	Request    shared.RackRole `request:"mediaType=application/json"`
}

type DcimRackRolesPartialUpdateResponse struct {
	ContentType string
	RackRole    *shared.RackRole
	StatusCode  int64
}
