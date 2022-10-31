package operations



type GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegePathParams struct {
    RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
    
}

type GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    
}

type GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeRequest struct {
    PathParams GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegePathParams 
    QueryParams GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeQueryParams 
    
}

type GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

