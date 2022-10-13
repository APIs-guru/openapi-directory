package operations

import (
	"openapi/pkg/models/shared"
)

type ResultsReadPathParams struct {
	ResultFileID string `pathParam:"style=simple,explode=false,name=result_file_id"`
}

type ResultsReadRequest struct {
	PathParams ResultsReadPathParams
}

type ResultsReadResponse struct {
	ContentType    string
	ResultResponse *shared.ResultResponse
	StatusCode     int64
}
