package operations

import (
	"openapi/pkg/models/shared"
)

type GetAdministrationEntityHeaders struct {
	Token *string `header:"name=Token"`
}

type GetAdministrationEntityRequest struct {
	Headers GetAdministrationEntityHeaders
}

type GetAdministrationEntityResponse struct {
	Body        []byte
	ContentType string
	Entities    []shared.Entity
	StatusCode  int64
}
