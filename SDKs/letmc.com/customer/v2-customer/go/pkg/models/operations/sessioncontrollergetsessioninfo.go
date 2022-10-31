package operations



type SessionControllerGetSessionInfoPathParams struct {
    ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
    
}

type SessionControllerGetSessionInfoQueryParams struct {
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type SessionControllerGetSessionInfoRequest struct {
    PathParams SessionControllerGetSessionInfoPathParams 
    QueryParams SessionControllerGetSessionInfoQueryParams 
    
}

type SessionControllerGetSessionInfoResponse struct {
    ContentType string 
    SessionControllerGetSessionInfo200ApplicationJSONString *string 
    SessionControllerGetSessionInfo200ApplicationXMLString *string 
    SessionControllerGetSessionInfo200TextJSONString *string 
    SessionControllerGetSessionInfo200TextXMLString *string 
    StatusCode int64 
    
}

