package operations



type DeletePermissionAppsAppIDPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type DeletePermissionAppsAppIDQueryParams struct {
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type DeletePermissionAppsAppIDRequest struct {
    PathParams DeletePermissionAppsAppIDPathParams 
    QueryParams DeletePermissionAppsAppIDQueryParams 
    
}

type DeletePermissionAppsAppIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

