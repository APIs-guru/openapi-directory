package operations



type GetRealmClientSessionStatsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientSessionStatsRequest struct {
    PathParams GetRealmClientSessionStatsPathParams 
    
}

type GetRealmClientSessionStatsResponse struct {
    ContentType string 
    GetRealmClientSessionStats2XxApplicationJSONObjects []map[string]interface{} 
    StatusCode int64 
    
}

