package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAbschlussPathParams struct {
	RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
}

type CreateAbschlussRequest struct {
	PathParams CreateAbschlussPathParams
	Request    shared.Abschlussbelegdaten `request:"mediaType=application/json"`
}

type CreateAbschlussResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
