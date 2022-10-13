package operations

type GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams struct {
	RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
}

type GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams struct {
	After  *string `queryParam:"style=form,explode=true,name=after"`
	Before *string `queryParam:"style=form,explode=true,name=before"`
}

type GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeRequest struct {
	PathParams  GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams
	QueryParams GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams
}

type GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse struct {
	ContentType string
	StatusCode  int64
}
