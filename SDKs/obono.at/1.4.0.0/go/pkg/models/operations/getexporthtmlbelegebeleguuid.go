package operations



type GetExportHTMLBelegeBelegUUIDPathParams struct {
    BelegUUID string `pathParam:"style=simple,explode=false,name=belegUuid"`
    
}

type GetExportHTMLBelegeBelegUUIDRequest struct {
    PathParams GetExportHTMLBelegeBelegUUIDPathParams 
    
}

type GetExportHTMLBelegeBelegUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

