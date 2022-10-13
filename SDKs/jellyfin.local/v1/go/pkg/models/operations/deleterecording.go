package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRecordingPathParams struct {
	RecordingID string `pathParam:"style=simple,explode=false,name=recordingId"`
}

type DeleteRecordingSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRecordingRequest struct {
	PathParams DeleteRecordingPathParams
	Security   DeleteRecordingSecurity
}

type DeleteRecordingResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
