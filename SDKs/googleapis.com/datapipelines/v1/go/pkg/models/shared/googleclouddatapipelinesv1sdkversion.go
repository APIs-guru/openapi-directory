package shared

type GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum string

const (
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumUnknown     GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum = "UNKNOWN"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumSupported   GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum = "SUPPORTED"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumStale       GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum = "STALE"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumDeprecated  GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum = "DEPRECATED"
	GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnumUnsupported GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum = "UNSUPPORTED"
)

type GoogleCloudDatapipelinesV1SdkVersion struct {
	SdkSupportStatus   *GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum `json:"sdkSupportStatus,omitempty"`
	Version            *string                                                   `json:"version,omitempty"`
	VersionDisplayName *string                                                   `json:"versionDisplayName,omitempty"`
}
