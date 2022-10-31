package operations



type UpdateDeviceCameraWirelessProfilesPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type UpdateDeviceCameraWirelessProfilesRequestBodyIds struct {
    Backup *string `json:"backup,omitempty"`
    Primary *string `json:"primary,omitempty"`
    Secondary *string `json:"secondary,omitempty"`
    
}

type UpdateDeviceCameraWirelessProfilesRequestBody struct {
    Ids UpdateDeviceCameraWirelessProfilesRequestBodyIds `json:"ids"`
    
}

type UpdateDeviceCameraWirelessProfilesRequest struct {
    PathParams UpdateDeviceCameraWirelessProfilesPathParams 
    Request UpdateDeviceCameraWirelessProfilesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeviceCameraWirelessProfilesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateDeviceCameraWirelessProfiles200ApplicationJSONObject map[string]interface{} 
    
}

