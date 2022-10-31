package operations



type GetInstancesIDFramesFramePathParams struct {
    Frame string `pathParam:"style=simple,explode=false,name=frame"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDFramesFrameRequest struct {
    PathParams GetInstancesIDFramesFramePathParams 
    
}

type GetInstancesIDFramesFrameResponse struct {
    ContentType string 
    GetInstancesIDFramesFrame200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

