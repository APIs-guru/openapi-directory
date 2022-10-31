package operations



type GetOrganizationLicensePathParams struct {
    LicenseID string `pathParam:"style=simple,explode=false,name=licenseId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationLicenseRequest struct {
    PathParams GetOrganizationLicensePathParams 
    
}

type GetOrganizationLicenseResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationLicense200ApplicationJSONObject map[string]interface{} 
    
}

