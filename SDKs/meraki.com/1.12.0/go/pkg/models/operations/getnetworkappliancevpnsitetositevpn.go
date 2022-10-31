package operations

type GetNetworkApplianceVpnSiteToSiteVpnPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceVpnSiteToSiteVpnRequest struct {
	PathParams GetNetworkApplianceVpnSiteToSiteVpnPathParams
}

type GetNetworkApplianceVpnSiteToSiteVpnResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject map[string]interface{}
}
