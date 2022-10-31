package operations



type GetInstancesIDFramesFrameRawPathParams struct {
    Frame float64 `pathParam:"style=simple,explode=false,name=frame"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDFramesFrameRawRequest struct {
    PathParams GetInstancesIDFramesFrameRawPathParams 
    
}

type GetInstancesIDFramesFrameRawResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

