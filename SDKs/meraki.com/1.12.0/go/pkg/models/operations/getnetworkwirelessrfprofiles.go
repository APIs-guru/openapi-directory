package operations

type GetNetworkWirelessRfProfilesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkWirelessRfProfilesQueryParams struct {
	IncludeTemplateProfiles *bool `queryParam:"style=form,explode=true,name=includeTemplateProfiles"`
}

type GetNetworkWirelessRfProfilesRequest struct {
	PathParams  GetNetworkWirelessRfProfilesPathParams
	QueryParams GetNetworkWirelessRfProfilesQueryParams
}

type GetNetworkWirelessRfProfilesResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetNetworkWirelessRfProfiles200ApplicationJSONObject map[string]interface{}
}
