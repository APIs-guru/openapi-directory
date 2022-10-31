package operations

import (
	"openapi/pkg/models/shared"
)

type GetBelegePathParams struct {
	RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
}

type GetBelegeFormatEnum string

const (
	GetBelegeFormatEnumExport   GetBelegeFormatEnum = "export"
	GetBelegeFormatEnumBeleg    GetBelegeFormatEnum = "beleg"
	GetBelegeFormatEnumUuidlist GetBelegeFormatEnum = "uuidlist"
)

type GetBelegeOrderEnum string

const (
	GetBelegeOrderEnumAsc  GetBelegeOrderEnum = "asc"
	GetBelegeOrderEnumDesc GetBelegeOrderEnum = "desc"
)

type GetBelegeQueryParams struct {
	After  *string             `queryParam:"style=form,explode=true,name=after"`
	Before *string             `queryParam:"style=form,explode=true,name=before"`
	Format GetBelegeFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Gte    *int64              `queryParam:"style=form,explode=true,name=gte"`
	Limit  *int64              `queryParam:"style=form,explode=true,name=limit"`
	Lte    *int64              `queryParam:"style=form,explode=true,name=lte"`
	Offset *int64              `queryParam:"style=form,explode=true,name=offset"`
	Order  *GetBelegeOrderEnum `queryParam:"style=form,explode=true,name=order"`
}

type GetBelegeRequest struct {
	PathParams  GetBelegePathParams
	QueryParams GetBelegeQueryParams
}

type GetBelegeResponse struct {
	Belege      *shared.Belege
	ContentType string
	StatusCode  int64
}
