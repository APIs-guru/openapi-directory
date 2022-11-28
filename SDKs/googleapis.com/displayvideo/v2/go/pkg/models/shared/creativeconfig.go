package shared

type CreativeConfigCreativeTypeEnum string

const (
	CreativeConfigCreativeTypeEnumCreativeTypeUnspecified                     CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_UNSPECIFIED"
	CreativeConfigCreativeTypeEnumCreativeTypeStandard                        CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_STANDARD"
	CreativeConfigCreativeTypeEnumCreativeTypeExpandable                      CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_EXPANDABLE"
	CreativeConfigCreativeTypeEnumCreativeTypeVideo                           CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_VIDEO"
	CreativeConfigCreativeTypeEnumCreativeTypeNative                          CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE"
	CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstall             CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeSiteSquare                CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
	CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstallInterstitial CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
	CreativeConfigCreativeTypeEnumCreativeTypeLightbox                        CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_LIGHTBOX"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeAppInstall                CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeAppInstallSquare          CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
	CreativeConfigCreativeTypeEnumCreativeTypeAudio                           CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_AUDIO"
	CreativeConfigCreativeTypeEnumCreativeTypePublisherHosted                 CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_PUBLISHER_HOSTED"
	CreativeConfigCreativeTypeEnumCreativeTypeNativeVideo                     CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_NATIVE_VIDEO"
	CreativeConfigCreativeTypeEnumCreativeTypeTemplatedAppInstallVideo        CreativeConfigCreativeTypeEnum = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
)

// CreativeConfig
// Creative requirements configuration for the inventory source.
type CreativeConfig struct {
	CreativeType          *CreativeConfigCreativeTypeEnum       `json:"creativeType,omitempty"`
	DisplayCreativeConfig *InventorySourceDisplayCreativeConfig `json:"displayCreativeConfig,omitempty"`
	VideoCreativeConfig   *InventorySourceVideoCreativeConfig   `json:"videoCreativeConfig,omitempty"`
}
