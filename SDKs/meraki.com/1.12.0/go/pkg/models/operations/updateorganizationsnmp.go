package operations

type UpdateOrganizationSnmpPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationSnmpRequestBodyV3AuthModeEnum string

const (
	UpdateOrganizationSnmpRequestBodyV3AuthModeEnumMd5 UpdateOrganizationSnmpRequestBodyV3AuthModeEnum = "MD5"
	UpdateOrganizationSnmpRequestBodyV3AuthModeEnumSha UpdateOrganizationSnmpRequestBodyV3AuthModeEnum = "SHA"
)

type UpdateOrganizationSnmpRequestBodyV3PrivModeEnum string

const (
	UpdateOrganizationSnmpRequestBodyV3PrivModeEnumDes    UpdateOrganizationSnmpRequestBodyV3PrivModeEnum = "DES"
	UpdateOrganizationSnmpRequestBodyV3PrivModeEnumAes128 UpdateOrganizationSnmpRequestBodyV3PrivModeEnum = "AES128"
)

type UpdateOrganizationSnmpRequestBody struct {
	PeerIps    []string                                         `json:"peerIps"`
	V2cEnabled *bool                                            `json:"v2cEnabled"`
	V3AuthMode *UpdateOrganizationSnmpRequestBodyV3AuthModeEnum `json:"v3AuthMode"`
	V3AuthPass *string                                          `json:"v3AuthPass"`
	V3Enabled  *bool                                            `json:"v3Enabled"`
	V3PrivMode *UpdateOrganizationSnmpRequestBodyV3PrivModeEnum `json:"v3PrivMode"`
	V3PrivPass *string                                          `json:"v3PrivPass"`
}

type UpdateOrganizationSnmpRequest struct {
	PathParams UpdateOrganizationSnmpPathParams
	Request    *UpdateOrganizationSnmpRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationSnmpResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	UpdateOrganizationSnmp200ApplicationJSONObject map[string]interface{}
}
