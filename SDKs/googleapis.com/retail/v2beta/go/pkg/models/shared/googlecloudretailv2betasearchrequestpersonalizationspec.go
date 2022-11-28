package shared

type GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum string

const (
	GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnumModeUnspecified GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum = "MODE_UNSPECIFIED"
	GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnumAuto            GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum = "AUTO"
	GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnumDisabled        GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum = "DISABLED"
)

// GoogleCloudRetailV2betaSearchRequestPersonalizationSpec
// The specification for personalization.
type GoogleCloudRetailV2betaSearchRequestPersonalizationSpec struct {
	Mode *GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum `json:"mode,omitempty"`
}
