package operations



type ViewOnlyLinksReadPathParams struct {
    LinkID string `pathParam:"style=simple,explode=false,name=link_id"`
    
}

type ViewOnlyLinksReadRequest struct {
    PathParams ViewOnlyLinksReadPathParams 
    
}

type ViewOnlyLinksReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

