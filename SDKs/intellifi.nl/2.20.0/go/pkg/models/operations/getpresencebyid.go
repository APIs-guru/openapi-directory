package operations

import (
	"openapi/pkg/models/shared"
)

type GetPresenceByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPresenceByIDRequest struct {
	PathParams GetPresenceByIDPathParams
}

type GetPresenceByIDResponse struct {
	ContentType string
	Presence    *shared.Presence
	StatusCode  int64
}
