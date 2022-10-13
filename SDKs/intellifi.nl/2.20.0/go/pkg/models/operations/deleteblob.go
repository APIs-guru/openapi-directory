package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBlobPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteBlobRequest struct {
	PathParams DeleteBlobPathParams
}

type DeleteBlobResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
