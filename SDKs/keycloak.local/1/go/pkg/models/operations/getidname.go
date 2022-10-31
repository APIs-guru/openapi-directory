package operations



type GetIDNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetIDNameRequest struct {
    PathParams GetIDNamePathParams 
    
}

type GetIDNameResponse struct {
    ContentType string 
    GetIDName2XxApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

