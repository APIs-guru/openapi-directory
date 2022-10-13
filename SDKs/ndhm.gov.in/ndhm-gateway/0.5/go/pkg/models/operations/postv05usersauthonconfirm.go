package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05UsersAuthOnConfirmHeaders struct {
	Authorization string `header:"name=Authorization"`
	XHipID        string `header:"name=X-HIP-ID"`
	XHiuID        string `header:"name=X-HIU-ID"`
}

type PostV05UsersAuthOnConfirmRequests struct {
	ApplicationXML             []byte                             `request:"mediaType=application/xml"`
	PatientAuthConfirmResponse *shared.PatientAuthConfirmResponse `request:"mediaType=application/json"`
}

type PostV05UsersAuthOnConfirmRequest struct {
	Headers PostV05UsersAuthOnConfirmHeaders
	Request PostV05UsersAuthOnConfirmRequests
}

type PostV05UsersAuthOnConfirmResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
