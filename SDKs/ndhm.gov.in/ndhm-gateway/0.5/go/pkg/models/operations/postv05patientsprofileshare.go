package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05PatientsProfileShareServerList = []string{
	"https://your-hrp-server.com",
}

type PostV05PatientsProfileShareHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHipID        string `header:"style=simple,explode=false,name=X-HIP-ID"`
}

type PostV05PatientsProfileShareRequests struct {
	ApplicationXML      []byte                      `request:"mediaType=application/xml"`
	ShareProfileRequest *shared.ShareProfileRequest `request:"mediaType=application/json"`
}

type PostV05PatientsProfileShareRequest struct {
	ServerURL *string
	Headers   PostV05PatientsProfileShareHeaders
	Request   PostV05PatientsProfileShareRequests
}

type PostV05PatientsProfileShareResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
