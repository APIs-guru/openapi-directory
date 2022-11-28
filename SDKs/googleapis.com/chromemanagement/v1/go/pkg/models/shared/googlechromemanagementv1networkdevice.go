package shared

type GoogleChromeManagementV1NetworkDeviceTypeEnum string

const (
	GoogleChromeManagementV1NetworkDeviceTypeEnumNetworkDeviceTypeUnspecified GoogleChromeManagementV1NetworkDeviceTypeEnum = "NETWORK_DEVICE_TYPE_UNSPECIFIED"
	GoogleChromeManagementV1NetworkDeviceTypeEnumCellularDevice               GoogleChromeManagementV1NetworkDeviceTypeEnum = "CELLULAR_DEVICE"
	GoogleChromeManagementV1NetworkDeviceTypeEnumEthernetDevice               GoogleChromeManagementV1NetworkDeviceTypeEnum = "ETHERNET_DEVICE"
	GoogleChromeManagementV1NetworkDeviceTypeEnumWifiDevice                   GoogleChromeManagementV1NetworkDeviceTypeEnum = "WIFI_DEVICE"
)

// GoogleChromeManagementV1NetworkDevice
// Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
type GoogleChromeManagementV1NetworkDevice struct {
	Iccid      *string                                        `json:"iccid,omitempty"`
	Imei       *string                                        `json:"imei,omitempty"`
	MacAddress *string                                        `json:"macAddress,omitempty"`
	Mdn        *string                                        `json:"mdn,omitempty"`
	Meid       *string                                        `json:"meid,omitempty"`
	Type       *GoogleChromeManagementV1NetworkDeviceTypeEnum `json:"type,omitempty"`
}
