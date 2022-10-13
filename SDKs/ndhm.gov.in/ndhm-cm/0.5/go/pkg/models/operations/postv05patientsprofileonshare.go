package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05PatientsProfileOnShareHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type PostV05PatientsProfileOnShareRequests struct {
	ApplicationXML     []byte                     `request:"mediaType=application/xml"`
	ShareProfileResult *shared.ShareProfileResult `request:"mediaType=application/json"`
}

type PostV05PatientsProfileOnShareRequest struct {
	Headers PostV05PatientsProfileOnShareHeaders
	Request PostV05PatientsProfileOnShareRequests
}

type PostV05PatientsProfileOnShareResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
