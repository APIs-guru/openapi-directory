package operations



type UpdateNetworkApplianceVpnSiteToSiteVpnPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs struct {
    HubID string `json:"hubId"`
    UseDefaultRoute *bool `json:"useDefaultRoute,omitempty"`
    
}


type UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum string

const (
    UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnumNone UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum = "none"
UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnumSpoke UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum = "spoke"
UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnumHub UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum = "hub"
)


type UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets struct {
    LocalSubnet string `json:"localSubnet"`
    UseVpn *bool `json:"useVpn,omitempty"`
    
}

type UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody struct {
    Hubs []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs `json:"hubs,omitempty"`
    Mode UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum `json:"mode"`
    Subnets []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets `json:"subnets,omitempty"`
    
}

type UpdateNetworkApplianceVpnSiteToSiteVpnRequest struct {
    PathParams UpdateNetworkApplianceVpnSiteToSiteVpnPathParams 
    Request UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceVpnSiteToSiteVpnResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject map[string]interface{} 
    
}

