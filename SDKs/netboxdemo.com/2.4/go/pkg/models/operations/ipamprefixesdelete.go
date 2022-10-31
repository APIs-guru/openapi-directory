package operations



type IpamPrefixesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamPrefixesDeleteRequest struct {
    PathParams IpamPrefixesDeletePathParams 
    
}

type IpamPrefixesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

