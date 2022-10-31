package operations

import (
	"openapi/pkg/models/shared"
)

type GetEpisodesInBatchHeaders struct {
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
}

type GetEpisodesInBatchRequest struct {
	Headers GetEpisodesInBatchHeaders
	Request shared.GetEpisodesInBatchForm `request:"mediaType=application/x-www-form-urlencoded"`
}

type GetEpisodesInBatchResponse struct {
	ContentType                string
	GetEpisodesInBatchResponse *shared.GetEpisodesInBatchResponse
	Headers                    map[string][]string
	StatusCode                 int64
}
