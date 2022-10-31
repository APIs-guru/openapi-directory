package operations



type GetInstancesIDFramesFrameRenderedPathParams struct {
    Frame float64 `pathParam:"style=simple,explode=false,name=frame"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstancesIDFramesFrameRenderedQueryParams struct {
    Height *float64 `queryParam:"style=form,explode=true,name=height"`
    Quality *float64 `queryParam:"style=form,explode=true,name=quality"`
    Smooth *bool `queryParam:"style=form,explode=true,name=smooth"`
    Width *float64 `queryParam:"style=form,explode=true,name=width"`
    WindowCenter *float64 `queryParam:"style=form,explode=true,name=window-center"`
    WindowWidth *float64 `queryParam:"style=form,explode=true,name=window-width"`
    
}

type GetInstancesIDFramesFrameRenderedHeaders struct {
    Accept *string `header:"style=simple,explode=false,name=Accept"`
    
}

type GetInstancesIDFramesFrameRenderedRequest struct {
    PathParams GetInstancesIDFramesFrameRenderedPathParams 
    QueryParams GetInstancesIDFramesFrameRenderedQueryParams 
    Headers GetInstancesIDFramesFrameRenderedHeaders 
    
}

type GetInstancesIDFramesFrameRenderedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

