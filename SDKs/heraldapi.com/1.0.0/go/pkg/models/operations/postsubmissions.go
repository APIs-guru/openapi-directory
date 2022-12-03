package operations

import (
	"openapi/pkg/models/shared"
)

type PostSubmissionsRequestBody struct {
	Application interface{} `json:"application"`
	ProducerID  string      `json:"producer_id"`
}

type PostSubmissions200ApplicationJSON struct {
	Submission *shared.SubmissionV1 `json:"submission,omitempty"`
}

type PostSubmissions400ApplicationJSON struct {
	Errors []shared.ErrorV1 `json:"errors,omitempty"`
}

type PostSubmissionsRequest struct {
	Request *PostSubmissionsRequestBody `request:"mediaType=application/json"`
}

type PostSubmissionsResponse struct {
	ContentType                             string
	StatusCode                              int64
	PostSubmissions200ApplicationJSONObject *PostSubmissions200ApplicationJSON
	PostSubmissions400ApplicationJSONObject *PostSubmissions400ApplicationJSON
}
