package operations



type RenewOrganizationLicensesSeatsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type RenewOrganizationLicensesSeatsRequestBody struct {
    LicenseIDToRenew string `json:"licenseIdToRenew"`
    UnusedLicenseID string `json:"unusedLicenseId"`
    
}

type RenewOrganizationLicensesSeatsRequest struct {
    PathParams RenewOrganizationLicensesSeatsPathParams 
    Request RenewOrganizationLicensesSeatsRequestBody `request:"mediaType=application/json"`
    
}

type RenewOrganizationLicensesSeatsResponse struct {
    ContentType string 
    StatusCode int64 
    RenewOrganizationLicensesSeats200ApplicationJSONObject map[string]interface{} 
    
}

