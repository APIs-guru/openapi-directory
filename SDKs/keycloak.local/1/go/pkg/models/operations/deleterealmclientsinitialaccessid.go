package operations



type DeleteRealmClientsInitialAccessIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmClientsInitialAccessIDRequest struct {
    PathParams DeleteRealmClientsInitialAccessIDPathParams 
    
}

type DeleteRealmClientsInitialAccessIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

