package operations

type UpdateNetworkSnmpPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSnmpRequestBodyAccessEnum string

const (
	UpdateNetworkSnmpRequestBodyAccessEnumNone      UpdateNetworkSnmpRequestBodyAccessEnum = "none"
	UpdateNetworkSnmpRequestBodyAccessEnumCommunity UpdateNetworkSnmpRequestBodyAccessEnum = "community"
	UpdateNetworkSnmpRequestBodyAccessEnumUsers     UpdateNetworkSnmpRequestBodyAccessEnum = "users"
)

type UpdateNetworkSnmpRequestBodyUsers struct {
	Passphrase string `json:"passphrase"`
	Username   string `json:"username"`
}

type UpdateNetworkSnmpRequestBody struct {
	Access          *UpdateNetworkSnmpRequestBodyAccessEnum `json:"access"`
	CommunityString *string                                 `json:"communityString"`
	Users           []UpdateNetworkSnmpRequestBodyUsers     `json:"users"`
}

type UpdateNetworkSnmpRequest struct {
	PathParams UpdateNetworkSnmpPathParams
	Request    *UpdateNetworkSnmpRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSnmpResponse struct {
	ContentType                               string
	StatusCode                                int64
	UpdateNetworkSnmp200ApplicationJSONObject map[string]interface{}
}
