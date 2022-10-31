package shared




type SdkVersionSdkSupportStatusEnum string

const (
    SdkVersionSdkSupportStatusEnumUnknown SdkVersionSdkSupportStatusEnum = "UNKNOWN"
SdkVersionSdkSupportStatusEnumSupported SdkVersionSdkSupportStatusEnum = "SUPPORTED"
SdkVersionSdkSupportStatusEnumStale SdkVersionSdkSupportStatusEnum = "STALE"
SdkVersionSdkSupportStatusEnumDeprecated SdkVersionSdkSupportStatusEnum = "DEPRECATED"
SdkVersionSdkSupportStatusEnumUnsupported SdkVersionSdkSupportStatusEnum = "UNSUPPORTED"
)


type SdkVersion struct {
    SdkSupportStatus *SdkVersionSdkSupportStatusEnum `json:"sdkSupportStatus,omitempty"`
    Version *string `json:"version,omitempty"`
    VersionDisplayName *string `json:"versionDisplayName,omitempty"`
    
}

