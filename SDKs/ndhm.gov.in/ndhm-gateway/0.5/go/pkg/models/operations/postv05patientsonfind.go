package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05PatientsOnFindHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type PostV05PatientsOnFindRequests struct {
	ApplicationXML                []byte                                `request:"mediaType=application/xml"`
	PatientIdentificationResponse *shared.PatientIdentificationResponse `request:"mediaType=application/json"`
}

type PostV05PatientsOnFindRequest struct {
	Headers PostV05PatientsOnFindHeaders
	Request PostV05PatientsOnFindRequests
}

type PostV05PatientsOnFindResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
