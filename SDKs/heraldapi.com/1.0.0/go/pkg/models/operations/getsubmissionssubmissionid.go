package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubmissionsSubmissionIDPathParams struct {
	SubmissionID string `pathParam:"style=simple,explode=false,name=submission_id"`
}

type GetSubmissionsSubmissionID200ApplicationJSON struct {
	Submission *shared.SubmissionV1 `json:"submission,omitempty"`
}

type GetSubmissionsSubmissionIDRequest struct {
	PathParams GetSubmissionsSubmissionIDPathParams
}

type GetSubmissionsSubmissionIDResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	GetSubmissionsSubmissionID200ApplicationJSONObject *GetSubmissionsSubmissionID200ApplicationJSON
}
