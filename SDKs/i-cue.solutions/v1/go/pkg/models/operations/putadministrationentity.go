package operations

import (
	"openapi/pkg/models/shared"
)

type PutAdministrationEntityHeaders struct {
	Token *string `header:"name=Token"`
}

type PutAdministrationEntityRequests struct {
	ToggleRequest  *shared.ToggleRequest `request:"mediaType=application/*+json"`
	ToggleRequest1 *shared.ToggleRequest `request:"mediaType=application/json"`
	ToggleRequest2 *shared.ToggleRequest `request:"mediaType=text/json"`
}

type PutAdministrationEntityRequest struct {
	Headers PutAdministrationEntityHeaders
	Request *PutAdministrationEntityRequests
}

type PutAdministrationEntityResponse struct {
	ContentType string
	StatusCode  int64
}
