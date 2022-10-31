package operations

import (
	"openapi/pkg/models/shared"
)

type GetBelegeBelegUUIDPathParams struct {
	BelegUUID string `pathParam:"style=simple,explode=false,name=belegUuid"`
}

type GetBelegeBelegUUIDRequest struct {
	PathParams GetBelegeBelegUUIDPathParams
}

type GetBelegeBelegUUIDResponse struct {
	Beleg       *shared.Beleg
	ContentType string
	StatusCode  int64
}
