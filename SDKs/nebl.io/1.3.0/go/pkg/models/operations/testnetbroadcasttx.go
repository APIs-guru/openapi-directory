package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetBroadcastTxRequest struct {
	Request shared.BroadcastTxRequest `request:"mediaType=application/json"`
}

type TestnetBroadcastTxResponse struct {
	ContentType         string
	Error               *shared.Error
	StatusCode          int64
	BroadcastTxResponse *shared.BroadcastTxResponse
}
