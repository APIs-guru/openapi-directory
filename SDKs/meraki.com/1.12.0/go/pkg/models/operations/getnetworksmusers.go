package operations



type GetNetworkSmUsersPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmUsersQueryParams struct {
    Emails []string `queryParam:"style=form,explode=false,name=emails"`
    Ids []string `queryParam:"style=form,explode=false,name=ids"`
    Scope []string `queryParam:"style=form,explode=false,name=scope"`
    Usernames []string `queryParam:"style=form,explode=false,name=usernames"`
    
}

type GetNetworkSmUsersRequest struct {
    PathParams GetNetworkSmUsersPathParams 
    QueryParams GetNetworkSmUsersQueryParams 
    
}

type GetNetworkSmUsersResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmUsers200ApplicationJSONObject map[string]interface{} 
    
}

