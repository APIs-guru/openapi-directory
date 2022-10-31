package operations



type GetDevelopersDeveloperIDPathParams struct {
    DeveloperID string `pathParam:"style=simple,explode=false,name=developerId"`
    
}

type GetDevelopersDeveloperIDRequest struct {
    PathParams GetDevelopersDeveloperIDPathParams 
    
}

type GetDevelopersDeveloperIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

