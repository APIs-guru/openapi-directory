package operations

type GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationApplianceVpnThirdPartyVpnPeersRequest struct {
	PathParams GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams
}

type GetOrganizationApplianceVpnThirdPartyVpnPeersResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJSONObject map[string]interface{}
}
