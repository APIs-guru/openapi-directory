package operations



type PostPermissionAppsAppIDPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type PostPermissionAppsAppIDQueryParams struct {
    Date *int64 `queryParam:"style=form,explode=true,name=date"`
    IP *string `queryParam:"style=form,explode=true,name=ip"`
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type PostPermissionAppsAppIDRequest struct {
    PathParams PostPermissionAppsAppIDPathParams 
    QueryParams PostPermissionAppsAppIDQueryParams 
    
}

type PostPermissionAppsAppIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

