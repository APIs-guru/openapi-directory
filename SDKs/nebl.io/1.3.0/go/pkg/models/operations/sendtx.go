package operations

import (
	"openapi/pkg/models/shared"
)

type SendTxRequest struct {
	Request shared.SendTxRequest `request:"mediaType=application/json"`
}

type SendTxResponse struct {
	ContentType         string
	Error               *shared.Error
	StatusCode          int64
	BroadcastTxResponse *shared.BroadcastTxResponse
}
