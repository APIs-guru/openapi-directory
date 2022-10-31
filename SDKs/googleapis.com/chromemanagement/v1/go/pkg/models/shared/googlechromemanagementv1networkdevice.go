package shared




type GoogleChromeManagementV1NetworkDeviceTypeEnum string

const (
    GoogleChromeManagementV1NetworkDeviceTypeEnumNetworkDeviceTypeUnspecified GoogleChromeManagementV1NetworkDeviceTypeEnum = "NETWORK_DEVICE_TYPE_UNSPECIFIED"
GoogleChromeManagementV1NetworkDeviceTypeEnumCellularDevice GoogleChromeManagementV1NetworkDeviceTypeEnum = "CELLULAR_DEVICE"
GoogleChromeManagementV1NetworkDeviceTypeEnumEthernetDevice GoogleChromeManagementV1NetworkDeviceTypeEnum = "ETHERNET_DEVICE"
GoogleChromeManagementV1NetworkDeviceTypeEnumWifiDevice GoogleChromeManagementV1NetworkDeviceTypeEnum = "WIFI_DEVICE"
)


type GoogleChromeManagementV1NetworkDevice struct {
    Iccid *string `json:"iccid,omitempty"`
    Imei *string `json:"imei,omitempty"`
    MacAddress *string `json:"macAddress,omitempty"`
    Mdn *string `json:"mdn,omitempty"`
    Meid *string `json:"meid,omitempty"`
    Type *GoogleChromeManagementV1NetworkDeviceTypeEnum `json:"type,omitempty"`
    
}

