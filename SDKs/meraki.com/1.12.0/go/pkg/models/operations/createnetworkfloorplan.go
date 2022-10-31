package operations



type CreateNetworkFloorPlanPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkFloorPlanRequestBodyBottomLeftCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type CreateNetworkFloorPlanRequestBodyBottomRightCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type CreateNetworkFloorPlanRequestBodyCenter struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type CreateNetworkFloorPlanRequestBodyTopLeftCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type CreateNetworkFloorPlanRequestBodyTopRightCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type CreateNetworkFloorPlanRequestBody struct {
    BottomLeftCorner *CreateNetworkFloorPlanRequestBodyBottomLeftCorner `json:"bottomLeftCorner,omitempty"`
    BottomRightCorner *CreateNetworkFloorPlanRequestBodyBottomRightCorner `json:"bottomRightCorner,omitempty"`
    Center *CreateNetworkFloorPlanRequestBodyCenter `json:"center,omitempty"`
    ImageContents string `json:"imageContents"`
    Name string `json:"name"`
    TopLeftCorner *CreateNetworkFloorPlanRequestBodyTopLeftCorner `json:"topLeftCorner,omitempty"`
    TopRightCorner *CreateNetworkFloorPlanRequestBodyTopRightCorner `json:"topRightCorner,omitempty"`
    
}

type CreateNetworkFloorPlanRequest struct {
    PathParams CreateNetworkFloorPlanPathParams 
    Request CreateNetworkFloorPlanRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkFloorPlanResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkFloorPlan201ApplicationJSONObject map[string]interface{} 
    
}

