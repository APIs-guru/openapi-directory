package operations



type UpdateNetworkWirelessSsidBonjourForwardingPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}


type UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum string

const (
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAllServices UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "All Services"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAirPlay UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "AirPlay"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAfp UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "AFP"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumBitTorrent UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "BitTorrent"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumFtp UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "FTP"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumIChat UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "iChat"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumITunes UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "iTunes"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumPrinters UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "Printers"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSamba UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "Samba"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumScanners UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "Scanners"
UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumSSH UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = "SSH"
)


type UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules struct {
    Description *string `json:"description,omitempty"`
    Services []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum `json:"services"`
    VlanID string `json:"vlanId"`
    
}

type UpdateNetworkWirelessSsidBonjourForwardingRequestBody struct {
    Enabled *bool `json:"enabled,omitempty"`
    Rules []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules `json:"rules,omitempty"`
    
}

type UpdateNetworkWirelessSsidBonjourForwardingRequest struct {
    PathParams UpdateNetworkWirelessSsidBonjourForwardingPathParams 
    Request *UpdateNetworkWirelessSsidBonjourForwardingRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWirelessSsidBonjourForwardingResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject map[string]interface{} 
    
}

