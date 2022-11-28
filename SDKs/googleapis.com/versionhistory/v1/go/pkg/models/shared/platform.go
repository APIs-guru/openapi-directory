package shared

type PlatformPlatformTypeEnum string

const (
	PlatformPlatformTypeEnumPlatformTypeUnspecified PlatformPlatformTypeEnum = "PLATFORM_TYPE_UNSPECIFIED"
	PlatformPlatformTypeEnumWin                     PlatformPlatformTypeEnum = "WIN"
	PlatformPlatformTypeEnumWin64                   PlatformPlatformTypeEnum = "WIN64"
	PlatformPlatformTypeEnumMac                     PlatformPlatformTypeEnum = "MAC"
	PlatformPlatformTypeEnumLinux                   PlatformPlatformTypeEnum = "LINUX"
	PlatformPlatformTypeEnumAndroid                 PlatformPlatformTypeEnum = "ANDROID"
	PlatformPlatformTypeEnumWebview                 PlatformPlatformTypeEnum = "WEBVIEW"
	PlatformPlatformTypeEnumIos                     PlatformPlatformTypeEnum = "IOS"
	PlatformPlatformTypeEnumAll                     PlatformPlatformTypeEnum = "ALL"
	PlatformPlatformTypeEnumMacArm64                PlatformPlatformTypeEnum = "MAC_ARM64"
	PlatformPlatformTypeEnumLacros                  PlatformPlatformTypeEnum = "LACROS"
	PlatformPlatformTypeEnumLacrosArm32             PlatformPlatformTypeEnum = "LACROS_ARM32"
	PlatformPlatformTypeEnumChromeos                PlatformPlatformTypeEnum = "CHROMEOS"
	PlatformPlatformTypeEnumLacrosArm64             PlatformPlatformTypeEnum = "LACROS_ARM64"
	PlatformPlatformTypeEnumFuchsia                 PlatformPlatformTypeEnum = "FUCHSIA"
)

// Platform
// Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
type Platform struct {
	Name         *string                   `json:"name,omitempty"`
	PlatformType *PlatformPlatformTypeEnum `json:"platformType,omitempty"`
}
