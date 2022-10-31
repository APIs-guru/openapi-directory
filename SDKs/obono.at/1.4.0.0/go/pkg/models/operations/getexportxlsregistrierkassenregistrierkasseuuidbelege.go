package operations

type GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams struct {
	RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
}

type GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams struct {
	After  *string `queryParam:"style=form,explode=true,name=after"`
	Before *string `queryParam:"style=form,explode=true,name=before"`
}

type GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeRequest struct {
	PathParams  GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams
	QueryParams GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams
}

type GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse struct {
	ContentType string
	StatusCode  int64
}
