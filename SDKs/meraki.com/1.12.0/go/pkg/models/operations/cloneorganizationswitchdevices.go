package operations



type CloneOrganizationSwitchDevicesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type CloneOrganizationSwitchDevicesRequestBody struct {
    SourceSerial string `json:"sourceSerial"`
    TargetSerials []string `json:"targetSerials"`
    
}

type CloneOrganizationSwitchDevicesRequest struct {
    PathParams CloneOrganizationSwitchDevicesPathParams 
    Request CloneOrganizationSwitchDevicesRequestBody `request:"mediaType=application/json"`
    
}

type CloneOrganizationSwitchDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    CloneOrganizationSwitchDevices200ApplicationJSONObject map[string]interface{} 
    
}

