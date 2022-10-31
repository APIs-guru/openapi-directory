package shared

type GoogleChromeManagementV1BrowserVersionChannelEnum string

const (
	GoogleChromeManagementV1BrowserVersionChannelEnumReleaseChannelUnspecified GoogleChromeManagementV1BrowserVersionChannelEnum = "RELEASE_CHANNEL_UNSPECIFIED"
	GoogleChromeManagementV1BrowserVersionChannelEnumCanary                    GoogleChromeManagementV1BrowserVersionChannelEnum = "CANARY"
	GoogleChromeManagementV1BrowserVersionChannelEnumDev                       GoogleChromeManagementV1BrowserVersionChannelEnum = "DEV"
	GoogleChromeManagementV1BrowserVersionChannelEnumBeta                      GoogleChromeManagementV1BrowserVersionChannelEnum = "BETA"
	GoogleChromeManagementV1BrowserVersionChannelEnumStable                    GoogleChromeManagementV1BrowserVersionChannelEnum = "STABLE"
)

type GoogleChromeManagementV1BrowserVersionSystemEnum string

const (
	GoogleChromeManagementV1BrowserVersionSystemEnumDeviceSystemUnspecified GoogleChromeManagementV1BrowserVersionSystemEnum = "DEVICE_SYSTEM_UNSPECIFIED"
	GoogleChromeManagementV1BrowserVersionSystemEnumSystemOther             GoogleChromeManagementV1BrowserVersionSystemEnum = "SYSTEM_OTHER"
	GoogleChromeManagementV1BrowserVersionSystemEnumSystemAndroid           GoogleChromeManagementV1BrowserVersionSystemEnum = "SYSTEM_ANDROID"
	GoogleChromeManagementV1BrowserVersionSystemEnumSystemIos               GoogleChromeManagementV1BrowserVersionSystemEnum = "SYSTEM_IOS"
	GoogleChromeManagementV1BrowserVersionSystemEnumSystemCros              GoogleChromeManagementV1BrowserVersionSystemEnum = "SYSTEM_CROS"
	GoogleChromeManagementV1BrowserVersionSystemEnumSystemWindows           GoogleChromeManagementV1BrowserVersionSystemEnum = "SYSTEM_WINDOWS"
	GoogleChromeManagementV1BrowserVersionSystemEnumSystemMac               GoogleChromeManagementV1BrowserVersionSystemEnum = "SYSTEM_MAC"
	GoogleChromeManagementV1BrowserVersionSystemEnumSystemLinux             GoogleChromeManagementV1BrowserVersionSystemEnum = "SYSTEM_LINUX"
)

type GoogleChromeManagementV1BrowserVersion struct {
	Channel         *GoogleChromeManagementV1BrowserVersionChannelEnum `json:"channel,omitempty"`
	Count           *string                                            `json:"count,omitempty"`
	DeviceOsVersion *string                                            `json:"deviceOsVersion,omitempty"`
	System          *GoogleChromeManagementV1BrowserVersionSystemEnum  `json:"system,omitempty"`
	Version         *string                                            `json:"version,omitempty"`
}
