package shared

type SdkVersionSdkSupportStatusEnum string

const (
	SdkVersionSdkSupportStatusEnumUnknown     SdkVersionSdkSupportStatusEnum = "UNKNOWN"
	SdkVersionSdkSupportStatusEnumSupported   SdkVersionSdkSupportStatusEnum = "SUPPORTED"
	SdkVersionSdkSupportStatusEnumStale       SdkVersionSdkSupportStatusEnum = "STALE"
	SdkVersionSdkSupportStatusEnumDeprecated  SdkVersionSdkSupportStatusEnum = "DEPRECATED"
	SdkVersionSdkSupportStatusEnumUnsupported SdkVersionSdkSupportStatusEnum = "UNSUPPORTED"
)

type SdkVersion struct {
	SdkSupportStatus   *SdkVersionSdkSupportStatusEnum `json:"sdkSupportStatus"`
	Version            *string                         `json:"version"`
	VersionDisplayName *string                         `json:"versionDisplayName"`
}
