package operations



type UpdateOrganizationLicensePathParams struct {
    LicenseID string `pathParam:"style=simple,explode=false,name=licenseId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationLicenseRequestBody struct {
    DeviceSerial *string `json:"deviceSerial,omitempty"`
    
}

type UpdateOrganizationLicenseRequest struct {
    PathParams UpdateOrganizationLicensePathParams 
    Request *UpdateOrganizationLicenseRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationLicenseResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationLicense200ApplicationJSONObject map[string]interface{} 
    
}

