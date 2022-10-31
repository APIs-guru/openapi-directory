package operations



type DeleteAppsAppIDPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type DeleteAppsAppIDQueryParams struct {
    DeveloperID string `queryParam:"style=form,explode=true,name=developerId"`
    
}

type DeleteAppsAppIDRequest struct {
    PathParams DeleteAppsAppIDPathParams 
    QueryParams DeleteAppsAppIDQueryParams 
    
}

type DeleteAppsAppIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

