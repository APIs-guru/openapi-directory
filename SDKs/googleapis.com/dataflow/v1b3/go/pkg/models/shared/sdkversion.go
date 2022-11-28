package shared

type SDKVersionSDKSupportStatusEnum string

const (
	SdkVersionSdkSupportStatusEnumUnknown     SDKVersionSDKSupportStatusEnum = "UNKNOWN"
	SdkVersionSdkSupportStatusEnumSupported   SDKVersionSDKSupportStatusEnum = "SUPPORTED"
	SdkVersionSdkSupportStatusEnumStale       SDKVersionSDKSupportStatusEnum = "STALE"
	SdkVersionSdkSupportStatusEnumDeprecated  SDKVersionSDKSupportStatusEnum = "DEPRECATED"
	SdkVersionSdkSupportStatusEnumUnsupported SDKVersionSDKSupportStatusEnum = "UNSUPPORTED"
)

// SDKVersion
// The version of the SDK used to run the job.
type SDKVersion struct {
	SdkSupportStatus   *SDKVersionSDKSupportStatusEnum `json:"sdkSupportStatus,omitempty"`
	Version            *string                         `json:"version,omitempty"`
	VersionDisplayName *string                         `json:"versionDisplayName,omitempty"`
}
