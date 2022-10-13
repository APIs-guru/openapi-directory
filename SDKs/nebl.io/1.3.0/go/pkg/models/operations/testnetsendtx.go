package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetSendTxRequest struct {
	Request shared.SendTxRequest `request:"mediaType=application/json"`
}

type TestnetSendTxResponse struct {
	ContentType         string
	Error               *shared.Error
	StatusCode          int64
	BroadcastTxResponse *shared.BroadcastTxResponse
}
