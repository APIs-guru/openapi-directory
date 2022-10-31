package operations



type ViewOnlyLinksNodeListPathParams struct {
    LinkID string `pathParam:"style=simple,explode=false,name=link_id"`
    
}

type ViewOnlyLinksNodeListRequest struct {
    PathParams ViewOnlyLinksNodeListPathParams 
    
}

type ViewOnlyLinksNodeListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

