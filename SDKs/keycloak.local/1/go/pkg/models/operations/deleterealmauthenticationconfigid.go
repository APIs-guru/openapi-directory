package operations



type DeleteRealmAuthenticationConfigIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmAuthenticationConfigIDRequest struct {
    PathParams DeleteRealmAuthenticationConfigIDPathParams 
    
}

type DeleteRealmAuthenticationConfigIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

