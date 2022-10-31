package operations



type DeleteRealmAttackDetectionBruteForceUsersPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmAttackDetectionBruteForceUsersRequest struct {
    PathParams DeleteRealmAttackDetectionBruteForceUsersPathParams 
    
}

type DeleteRealmAttackDetectionBruteForceUsersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

