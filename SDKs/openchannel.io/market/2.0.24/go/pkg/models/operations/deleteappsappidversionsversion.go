package operations



type DeleteAppsAppIDVersionsVersionPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type DeleteAppsAppIDVersionsVersionQueryParams struct {
    DeveloperID string `queryParam:"style=form,explode=true,name=developerId"`
    
}

type DeleteAppsAppIDVersionsVersionRequest struct {
    PathParams DeleteAppsAppIDVersionsVersionPathParams 
    QueryParams DeleteAppsAppIDVersionsVersionQueryParams 
    
}

type DeleteAppsAppIDVersionsVersionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

