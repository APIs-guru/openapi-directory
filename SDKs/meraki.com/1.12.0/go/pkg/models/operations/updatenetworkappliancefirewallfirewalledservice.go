package operations



type UpdateNetworkApplianceFirewallFirewalledServicePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Service string `pathParam:"style=simple,explode=false,name=service"`
    
}


type UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum string

const (
    UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnumBlocked UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum = "blocked"
UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnumRestricted UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum = "restricted"
UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnumUnrestricted UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum = "unrestricted"
)


type UpdateNetworkApplianceFirewallFirewalledServiceRequestBody struct {
    Access UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum `json:"access"`
    AllowedIps []string `json:"allowedIps,omitempty"`
    
}

type UpdateNetworkApplianceFirewallFirewalledServiceRequest struct {
    PathParams UpdateNetworkApplianceFirewallFirewalledServicePathParams 
    Request UpdateNetworkApplianceFirewallFirewalledServiceRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkApplianceFirewallFirewalledServiceResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject map[string]interface{} 
    
}

