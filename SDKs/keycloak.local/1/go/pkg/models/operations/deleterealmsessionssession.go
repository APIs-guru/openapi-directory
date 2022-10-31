package operations



type DeleteRealmSessionsSessionPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    Session string `pathParam:"style=simple,explode=false,name=session"`
    
}

type DeleteRealmSessionsSessionRequest struct {
    PathParams DeleteRealmSessionsSessionPathParams 
    
}

type DeleteRealmSessionsSessionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

