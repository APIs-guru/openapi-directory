package operations

import (
	"openapi/pkg/models/shared"
)

var PostV05UsersAuthOnInitServerList = []string{
	"https://your-hrp-server.com",
}

type PostV05UsersAuthOnInitHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHipID        string `header:"style=simple,explode=false,name=X-HIP-ID"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05UsersAuthOnInitRequests struct {
	ApplicationXML          []byte                          `request:"mediaType=application/xml"`
	PatientAuthInitResponse *shared.PatientAuthInitResponse `request:"mediaType=application/json"`
}

type PostV05UsersAuthOnInitRequest struct {
	ServerURL *string
	Headers   PostV05UsersAuthOnInitHeaders
	Request   PostV05UsersAuthOnInitRequests
}

type PostV05UsersAuthOnInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
