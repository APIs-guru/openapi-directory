package operations

import (
	"openapi/pkg/models/shared"
)

type AddKvPairsRequest struct {
	Request shared.KeyValuePairInput `request:"mediaType=application/json"`
}

type AddKvPairsResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
