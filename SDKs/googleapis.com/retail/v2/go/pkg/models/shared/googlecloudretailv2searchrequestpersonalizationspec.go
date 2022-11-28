package shared

type GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum string

const (
	GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnumModeUnspecified GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum = "MODE_UNSPECIFIED"
	GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnumAuto            GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum = "AUTO"
	GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnumDisabled        GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum = "DISABLED"
)

// GoogleCloudRetailV2SearchRequestPersonalizationSpec
// The specification for personalization.
type GoogleCloudRetailV2SearchRequestPersonalizationSpec struct {
	Mode *GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum `json:"mode,omitempty"`
}
