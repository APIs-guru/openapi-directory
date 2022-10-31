package operations

import (
	"openapi/pkg/models/shared"
)

type GetMonatsbelegePathParams struct {
	RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
}

type GetMonatsbelegeQueryParams struct {
	Month *int64 `queryParam:"style=form,explode=true,name=month"`
	Year  *int64 `queryParam:"style=form,explode=true,name=year"`
}

type GetMonatsbelegeRequest struct {
	PathParams  GetMonatsbelegePathParams
	QueryParams GetMonatsbelegeQueryParams
}

type GetMonatsbelegeResponse struct {
	ContentType  string
	Monatsbelegs []shared.Monatsbeleg
	StatusCode   int64
}
