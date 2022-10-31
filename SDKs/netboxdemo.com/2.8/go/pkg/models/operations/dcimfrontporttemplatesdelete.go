package operations



type DcimFrontPortTemplatesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimFrontPortTemplatesDeleteRequest struct {
    PathParams DcimFrontPortTemplatesDeletePathParams 
    
}

type DcimFrontPortTemplatesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

