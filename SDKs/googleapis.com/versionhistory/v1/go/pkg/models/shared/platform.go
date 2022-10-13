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
)

type Platform struct {
	Name         *string                   `json:"name"`
	PlatformType *PlatformPlatformTypeEnum `json:"platformType"`
}
