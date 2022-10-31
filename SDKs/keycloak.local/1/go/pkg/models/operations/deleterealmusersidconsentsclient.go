package operations



type DeleteRealmUsersIDConsentsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmUsersIDConsentsClientRequest struct {
    PathParams DeleteRealmUsersIDConsentsClientPathParams 
    
}

type DeleteRealmUsersIDConsentsClientResponse struct {
    ContentType string 
    StatusCode int64 
    
}

