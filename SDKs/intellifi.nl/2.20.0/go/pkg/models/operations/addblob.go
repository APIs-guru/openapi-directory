package operations

import (
	"openapi/pkg/models/shared"
)

type AddBlobRequest struct {
	Request shared.BlobInput `request:"mediaType=application/json"`
}

type AddBlobResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
