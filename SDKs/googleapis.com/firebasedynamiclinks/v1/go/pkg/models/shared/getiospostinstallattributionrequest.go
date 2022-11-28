package shared

type GetIosPostInstallAttributionRequestRetrievalMethodEnum string

const (
	GetIosPostInstallAttributionRequestRetrievalMethodEnumUnknownPayloadRetrievalMethod GetIosPostInstallAttributionRequestRetrievalMethodEnum = "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD"
	GetIosPostInstallAttributionRequestRetrievalMethodEnumImplicitWeakMatch             GetIosPostInstallAttributionRequestRetrievalMethodEnum = "IMPLICIT_WEAK_MATCH"
	GetIosPostInstallAttributionRequestRetrievalMethodEnumExplicitWeakMatch             GetIosPostInstallAttributionRequestRetrievalMethodEnum = "EXPLICIT_WEAK_MATCH"
	GetIosPostInstallAttributionRequestRetrievalMethodEnumExplicitStrongAfterWeakMatch  GetIosPostInstallAttributionRequestRetrievalMethodEnum = "EXPLICIT_STRONG_AFTER_WEAK_MATCH"
)

type GetIosPostInstallAttributionRequestVisualStyleEnum string

const (
	GetIosPostInstallAttributionRequestVisualStyleEnumUnknownVisualStyle GetIosPostInstallAttributionRequestVisualStyleEnum = "UNKNOWN_VISUAL_STYLE"
	GetIosPostInstallAttributionRequestVisualStyleEnumDefaultStyle       GetIosPostInstallAttributionRequestVisualStyleEnum = "DEFAULT_STYLE"
	GetIosPostInstallAttributionRequestVisualStyleEnumCustomStyle        GetIosPostInstallAttributionRequestVisualStyleEnum = "CUSTOM_STYLE"
)

// GetIosPostInstallAttributionRequest
// Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
type GetIosPostInstallAttributionRequest struct {
	AppInstallationTime    *string                                                 `json:"appInstallationTime,omitempty"`
	BundleID               *string                                                 `json:"bundleId,omitempty"`
	Device                 *DeviceInfo                                             `json:"device,omitempty"`
	IosVersion             *string                                                 `json:"iosVersion,omitempty"`
	RetrievalMethod        *GetIosPostInstallAttributionRequestRetrievalMethodEnum `json:"retrievalMethod,omitempty"`
	SdkVersion             *string                                                 `json:"sdkVersion,omitempty"`
	UniqueMatchLinkToCheck *string                                                 `json:"uniqueMatchLinkToCheck,omitempty"`
	VisualStyle            *GetIosPostInstallAttributionRequestVisualStyleEnum     `json:"visualStyle,omitempty"`
}
