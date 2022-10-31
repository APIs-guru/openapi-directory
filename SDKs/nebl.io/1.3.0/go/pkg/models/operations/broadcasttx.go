package operations

import (
	"openapi/pkg/models/shared"
)

type BroadcastTxRequest struct {
	Request shared.BroadcastTxRequest `request:"mediaType=application/json"`
}

type BroadcastTxResponse struct {
	ContentType         string
	Error               *shared.Error
	StatusCode          int64
	BroadcastTxResponse *shared.BroadcastTxResponse
}
