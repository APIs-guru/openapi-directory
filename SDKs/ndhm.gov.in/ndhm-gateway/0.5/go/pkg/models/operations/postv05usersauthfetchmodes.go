package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05UsersAuthFetchModesHeaders struct {
	Authorization string `header:"name=Authorization"`
	XCmID         string `header:"name=X-CM-ID"`
}

type PostV05UsersAuthFetchModesRequests struct {
	ApplicationXML              []byte                              `request:"mediaType=application/xml"`
	PatientAuthModeQueryRequest *shared.PatientAuthModeQueryRequest `request:"mediaType=application/json"`
}

type PostV05UsersAuthFetchModesRequest struct {
	Headers PostV05UsersAuthFetchModesHeaders
	Request PostV05UsersAuthFetchModesRequests
}

type PostV05UsersAuthFetchModesResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
