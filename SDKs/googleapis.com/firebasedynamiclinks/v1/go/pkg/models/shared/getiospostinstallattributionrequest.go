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

type GetIosPostInstallAttributionRequest struct {
	AppInstallationTime    *string                                                 `json:"appInstallationTime"`
	BundleID               *string                                                 `json:"bundleId"`
	Device                 *DeviceInfo                                             `json:"device"`
	IosVersion             *string                                                 `json:"iosVersion"`
	RetrievalMethod        *GetIosPostInstallAttributionRequestRetrievalMethodEnum `json:"retrievalMethod"`
	SdkVersion             *string                                                 `json:"sdkVersion"`
	UniqueMatchLinkToCheck *string                                                 `json:"uniqueMatchLinkToCheck"`
	VisualStyle            *GetIosPostInstallAttributionRequestVisualStyleEnum     `json:"visualStyle"`
}
