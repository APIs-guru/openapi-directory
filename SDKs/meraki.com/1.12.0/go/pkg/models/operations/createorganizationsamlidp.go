package operations

type CreateOrganizationSamlIdpPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationSamlIdpRequestBody struct {
	SloLogoutURL            *string `json:"sloLogoutUrl,omitempty"`
	X509certSha1Fingerprint string  `json:"x509certSha1Fingerprint"`
}

type CreateOrganizationSamlIdpRequest struct {
	PathParams CreateOrganizationSamlIdpPathParams
	Request    CreateOrganizationSamlIdpRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationSamlIdpResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	CreateOrganizationSamlIdp201ApplicationJSONObject map[string]interface{}
}
