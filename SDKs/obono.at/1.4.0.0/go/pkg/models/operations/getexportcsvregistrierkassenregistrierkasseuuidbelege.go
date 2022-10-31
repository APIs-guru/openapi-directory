package operations



type GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegePathParams struct {
    RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
    
}

type GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    Posten *bool `queryParam:"style=form,explode=true,name=posten"`
    
}

type GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeRequest struct {
    PathParams GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegePathParams 
    QueryParams GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeQueryParams 
    
}

type GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

