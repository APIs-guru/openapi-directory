package operations



type UpdateNetworkFloorPlanPathParams struct {
    FloorPlanID string `pathParam:"style=simple,explode=false,name=floorPlanId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkFloorPlanRequestBodyBottomLeftCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type UpdateNetworkFloorPlanRequestBodyBottomRightCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type UpdateNetworkFloorPlanRequestBodyCenter struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type UpdateNetworkFloorPlanRequestBodyTopLeftCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type UpdateNetworkFloorPlanRequestBodyTopRightCorner struct {
    Lat *float32 `json:"lat,omitempty"`
    Lng *float32 `json:"lng,omitempty"`
    
}

type UpdateNetworkFloorPlanRequestBody struct {
    BottomLeftCorner *UpdateNetworkFloorPlanRequestBodyBottomLeftCorner `json:"bottomLeftCorner,omitempty"`
    BottomRightCorner *UpdateNetworkFloorPlanRequestBodyBottomRightCorner `json:"bottomRightCorner,omitempty"`
    Center *UpdateNetworkFloorPlanRequestBodyCenter `json:"center,omitempty"`
    ImageContents *string `json:"imageContents,omitempty"`
    Name *string `json:"name,omitempty"`
    TopLeftCorner *UpdateNetworkFloorPlanRequestBodyTopLeftCorner `json:"topLeftCorner,omitempty"`
    TopRightCorner *UpdateNetworkFloorPlanRequestBodyTopRightCorner `json:"topRightCorner,omitempty"`
    
}

type UpdateNetworkFloorPlanRequest struct {
    PathParams UpdateNetworkFloorPlanPathParams 
    Request *UpdateNetworkFloorPlanRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkFloorPlanResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkFloorPlan200ApplicationJSONObject map[string]interface{} 
    
}

