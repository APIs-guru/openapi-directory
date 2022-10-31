package operations



type DeleteRealmAttackDetectionBruteForceUsersUserIDPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type DeleteRealmAttackDetectionBruteForceUsersUserIDRequest struct {
    PathParams DeleteRealmAttackDetectionBruteForceUsersUserIDPathParams 
    
}

type DeleteRealmAttackDetectionBruteForceUsersUserIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

