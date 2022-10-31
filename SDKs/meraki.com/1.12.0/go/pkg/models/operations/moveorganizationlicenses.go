package operations



type MoveOrganizationLicensesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type MoveOrganizationLicensesRequestBody struct {
    DestOrganizationID string `json:"destOrganizationId"`
    LicenseIds []string `json:"licenseIds"`
    
}

type MoveOrganizationLicensesRequest struct {
    PathParams MoveOrganizationLicensesPathParams 
    Request MoveOrganizationLicensesRequestBody `request:"mediaType=application/json"`
    
}

type MoveOrganizationLicensesResponse struct {
    ContentType string 
    StatusCode int64 
    MoveOrganizationLicenses200ApplicationJSONObject map[string]interface{} 
    
}

