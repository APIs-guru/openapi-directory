package operations



type GetExportGobdRegistrierkassenRegistrierkasseUUIDPathParams struct {
    RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
    
}

type GetExportGobdRegistrierkassenRegistrierkasseUUIDQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    
}

type GetExportGobdRegistrierkassenRegistrierkasseUUIDRequest struct {
    PathParams GetExportGobdRegistrierkassenRegistrierkasseUUIDPathParams 
    QueryParams GetExportGobdRegistrierkassenRegistrierkasseUUIDQueryParams 
    
}

type GetExportGobdRegistrierkassenRegistrierkasseUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

