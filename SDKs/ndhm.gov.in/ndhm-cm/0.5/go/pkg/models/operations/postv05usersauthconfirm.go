package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05UsersAuthConfirmHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type PostV05UsersAuthConfirmRequests struct {
	ApplicationXML            []byte                            `request:"mediaType=application/xml"`
	PatientAuthConfirmRequest *shared.PatientAuthConfirmRequest `request:"mediaType=application/json"`
}

type PostV05UsersAuthConfirmRequest struct {
	Headers PostV05UsersAuthConfirmHeaders
	Request PostV05UsersAuthConfirmRequests
}

type PostV05UsersAuthConfirmResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
