package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEventByIDRequest struct {
	PathParams GetEventByIDPathParams
}

type GetEventByIDResponse struct {
	ContentType string
	Event       *shared.Event
	StatusCode  int64
}
