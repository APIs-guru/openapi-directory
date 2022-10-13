package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLocationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateLocationRequest struct {
	PathParams UpdateLocationPathParams
	Request    shared.Location `request:"mediaType=application/json"`
}

type UpdateLocationResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
