package operations



type DeleteVolumesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteVolumesIDRequest struct {
    PathParams DeleteVolumesIDPathParams 
    
}

type DeleteVolumesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

