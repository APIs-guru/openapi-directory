package operations

type ClaimIntoOrganizationPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type ClaimIntoOrganizationRequestBodyLicensesModeEnum string

const (
	ClaimIntoOrganizationRequestBodyLicensesModeEnumAddDevices ClaimIntoOrganizationRequestBodyLicensesModeEnum = "addDevices"
	ClaimIntoOrganizationRequestBodyLicensesModeEnumRenew      ClaimIntoOrganizationRequestBodyLicensesModeEnum = "renew"
)

type ClaimIntoOrganizationRequestBodyLicenses struct {
	Key  string                                            `json:"key"`
	Mode *ClaimIntoOrganizationRequestBodyLicensesModeEnum `json:"mode"`
}

type ClaimIntoOrganizationRequestBody struct {
	Licenses []ClaimIntoOrganizationRequestBodyLicenses `json:"licenses"`
	Orders   []string                                   `json:"orders"`
	Serials  []string                                   `json:"serials"`
}

type ClaimIntoOrganizationRequest struct {
	PathParams ClaimIntoOrganizationPathParams
	Request    *ClaimIntoOrganizationRequestBody `request:"mediaType=application/json"`
}

type ClaimIntoOrganizationResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ClaimIntoOrganization200ApplicationJSONObject map[string]interface{}
}
