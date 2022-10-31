package operations



type PostAppsAppIDLivePathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type PostAppsAppIDLiveQueryParams struct {
    DeveloperID string `queryParam:"style=form,explode=true,name=developerId"`
    Version string `queryParam:"style=form,explode=true,name=version"`
    
}

type PostAppsAppIDLiveRequest struct {
    PathParams PostAppsAppIDLivePathParams 
    QueryParams PostAppsAppIDLiveQueryParams 
    
}

type PostAppsAppIDLiveResponse struct {
    ContentType string 
    StatusCode int64 
    
}

