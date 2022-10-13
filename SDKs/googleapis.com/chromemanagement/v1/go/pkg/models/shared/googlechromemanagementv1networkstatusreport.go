package shared

type GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum string

const (
	GoogleChromeManagementV1NetworkStatusReportConnectionStateEnumNetworkConnectionStateUnspecified GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum = "NETWORK_CONNECTION_STATE_UNSPECIFIED"
	GoogleChromeManagementV1NetworkStatusReportConnectionStateEnumOnline                            GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum = "ONLINE"
	GoogleChromeManagementV1NetworkStatusReportConnectionStateEnumConnected                         GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum = "CONNECTED"
	GoogleChromeManagementV1NetworkStatusReportConnectionStateEnumPortal                            GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum = "PORTAL"
	GoogleChromeManagementV1NetworkStatusReportConnectionStateEnumConnecting                        GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum = "CONNECTING"
	GoogleChromeManagementV1NetworkStatusReportConnectionStateEnumNotConnected                      GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum = "NOT_CONNECTED"
)

type GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum string

const (
	GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnumNetworkTypeUnspecified GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum = "NETWORK_TYPE_UNSPECIFIED"
	GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnumCellular               GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum = "CELLULAR"
	GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnumEthernet               GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum = "ETHERNET"
	GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnumTether                 GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum = "TETHER"
	GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnumVpn                    GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum = "VPN"
	GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnumWifi                   GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum = "WIFI"
)

type GoogleChromeManagementV1NetworkStatusReport struct {
	ConnectionState            *GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum `json:"connectionState"`
	ConnectionType             *GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum  `json:"connectionType"`
	EncryptionOn               *bool                                                           `json:"encryptionOn"`
	GatewayIPAddress           *string                                                         `json:"gatewayIpAddress"`
	GUID                       *string                                                         `json:"guid"`
	LanIPAddress               *string                                                         `json:"lanIpAddress"`
	ReceivingBitRateMbps       *string                                                         `json:"receivingBitRateMbps"`
	ReportTime                 *string                                                         `json:"reportTime"`
	SampleFrequency            *string                                                         `json:"sampleFrequency"`
	SignalStrengthDbm          *int32                                                          `json:"signalStrengthDbm"`
	TransmissionBitRateMbps    *string                                                         `json:"transmissionBitRateMbps"`
	TransmissionPowerDbm       *int32                                                          `json:"transmissionPowerDbm"`
	WifiLinkQuality            *string                                                         `json:"wifiLinkQuality"`
	WifiPowerManagementEnabled *bool                                                           `json:"wifiPowerManagementEnabled"`
}
