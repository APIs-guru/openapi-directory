package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlobMetadataByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBlobMetadataByIDRequest struct {
	PathParams GetBlobMetadataByIDPathParams
}

type GetBlobMetadataByIDResponse struct {
	Blob        *shared.Blob
	ContentType string
	StatusCode  int64
}
