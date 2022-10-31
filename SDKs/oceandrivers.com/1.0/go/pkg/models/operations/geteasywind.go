package operations



type GetEasywindPathParams struct {
    EasywindID string `pathParam:"style=simple,explode=false,name=easywindId"`
    
}

type GetEasywindQueryParams struct {
    Period string `queryParam:"style=form,explode=true,name=period"`
    
}

type GetEasywindRequest struct {
    PathParams GetEasywindPathParams 
    QueryParams GetEasywindQueryParams 
    
}

type GetEasywindResponse struct {
    ContentType string 
    StatusCode int64 
    
}

