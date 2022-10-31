package operations



type SessionControllerLoginPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type SessionControllerLoginQueryParams struct {
    Password string `queryParam:"style=form,explode=true,name=password"`
    Username string `queryParam:"style=form,explode=true,name=username"`
    
}

type SessionControllerLoginRequest struct {
    PathParams SessionControllerLoginPathParams 
    QueryParams SessionControllerLoginQueryParams 
    
}

type SessionControllerLoginResponse struct {
    ContentType string 
    SessionControllerLogin200ApplicationJSONString *string 
    SessionControllerLogin200ApplicationXMLString *string 
    SessionControllerLogin200TextJSONString *string 
    SessionControllerLogin200TextXMLString *string 
    StatusCode int64 
    
}

