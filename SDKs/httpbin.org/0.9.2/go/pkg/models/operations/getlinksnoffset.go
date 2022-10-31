package operations



type GetLinksNOffsetPathParams struct {
    N int64 `pathParam:"style=simple,explode=false,name=n"`
    Offset int64 `pathParam:"style=simple,explode=false,name=offset"`
    
}

type GetLinksNOffsetRequest struct {
    PathParams GetLinksNOffsetPathParams 
    
}

type GetLinksNOffsetResponse struct {
    ContentType string 
    StatusCode int64 
    
}

