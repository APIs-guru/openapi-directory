package shared

type GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum string

const (
	GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnumConditionUnspecified GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum = "CONDITION_UNSPECIFIED"
	GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnumDisabled             GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum = "DISABLED"
	GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnumAuto                 GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum = "AUTO"
)

// GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec
// Specification to determine under which conditions query expansion should occur.
type GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec struct {
	Condition            *GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum `json:"condition,omitempty"`
	PinUnexpandedResults *bool                                                                 `json:"pinUnexpandedResults,omitempty"`
}
