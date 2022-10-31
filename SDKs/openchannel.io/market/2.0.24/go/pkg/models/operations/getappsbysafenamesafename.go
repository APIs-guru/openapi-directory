package operations



type GetAppsBySafeNameSafeNamePathParams struct {
    SafeName string `pathParam:"style=simple,explode=false,name=safeName"`
    
}

type GetAppsBySafeNameSafeNameQueryParams struct {
    TrackViews *bool `queryParam:"style=form,explode=true,name=trackViews"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetAppsBySafeNameSafeNameRequest struct {
    PathParams GetAppsBySafeNameSafeNamePathParams 
    QueryParams GetAppsBySafeNameSafeNameQueryParams 
    
}

type GetAppsBySafeNameSafeNameResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

