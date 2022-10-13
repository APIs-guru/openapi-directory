package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecordingPathParams struct {
	RecordingID string `pathParam:"style=simple,explode=false,name=recordingId"`
}

type GetRecordingQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetRecordingSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetRecordingRequest struct {
	PathParams  GetRecordingPathParams
	QueryParams GetRecordingQueryParams
	Security    GetRecordingSecurity
}

type GetRecordingResponse struct {
	BaseItemDto *shared.BaseItemDto
	ContentType string
	StatusCode  int64
}
