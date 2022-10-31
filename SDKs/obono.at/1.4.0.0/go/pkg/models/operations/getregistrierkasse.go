package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistrierkassePathParams struct {
	RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
}

type GetRegistrierkasseRequest struct {
	PathParams GetRegistrierkassePathParams
}

type GetRegistrierkasseResponse struct {
	ContentType     string
	Registrierkasse *shared.Registrierkasse
	StatusCode      int64
}
