package operations

import (
	"openapi/pkg/models/shared"
)

type AddSpotSetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AddSpotSetRequest struct {
	PathParams AddSpotSetPathParams
	Request    shared.SpotSetCreateInput `request:"mediaType=application/json"`
}

type AddSpotSetResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
