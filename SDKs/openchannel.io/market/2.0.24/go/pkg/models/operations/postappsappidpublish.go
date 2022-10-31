package operations



type PostAppsAppIDPublishPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type PostAppsAppIDPublishQueryParams struct {
    AutoApprove *bool `queryParam:"style=form,explode=true,name=autoApprove"`
    DeveloperID string `queryParam:"style=form,explode=true,name=developerId"`
    Version int64 `queryParam:"style=form,explode=true,name=version"`
    
}

type PostAppsAppIDPublishRequest struct {
    PathParams PostAppsAppIDPublishPathParams 
    QueryParams PostAppsAppIDPublishQueryParams 
    
}

type PostAppsAppIDPublishResponse struct {
    ContentType string 
    StatusCode int64 
    
}

