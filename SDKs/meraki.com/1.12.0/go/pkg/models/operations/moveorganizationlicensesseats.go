package operations



type MoveOrganizationLicensesSeatsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type MoveOrganizationLicensesSeatsRequestBody struct {
    DestOrganizationID string `json:"destOrganizationId"`
    LicenseID string `json:"licenseId"`
    SeatCount int64 `json:"seatCount"`
    
}

type MoveOrganizationLicensesSeatsRequest struct {
    PathParams MoveOrganizationLicensesSeatsPathParams 
    Request MoveOrganizationLicensesSeatsRequestBody `request:"mediaType=application/json"`
    
}

type MoveOrganizationLicensesSeatsResponse struct {
    ContentType string 
    StatusCode int64 
    MoveOrganizationLicensesSeats200ApplicationJSONObject map[string]interface{} 
    
}

