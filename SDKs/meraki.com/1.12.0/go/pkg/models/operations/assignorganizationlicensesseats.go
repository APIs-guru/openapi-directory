package operations

type AssignOrganizationLicensesSeatsPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type AssignOrganizationLicensesSeatsRequestBody struct {
	LicenseID string `json:"licenseId"`
	NetworkID string `json:"networkId"`
	SeatCount int64  `json:"seatCount"`
}

type AssignOrganizationLicensesSeatsRequest struct {
	PathParams AssignOrganizationLicensesSeatsPathParams
	Request    AssignOrganizationLicensesSeatsRequestBody `request:"mediaType=application/json"`
}

type AssignOrganizationLicensesSeatsResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	AssignOrganizationLicensesSeats200ApplicationJSONObject map[string]interface{}
}
