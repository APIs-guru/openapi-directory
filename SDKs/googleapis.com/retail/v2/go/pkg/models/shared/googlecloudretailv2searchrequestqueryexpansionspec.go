package shared

type GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum string

const (
	GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnumConditionUnspecified GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum = "CONDITION_UNSPECIFIED"
	GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnumDisabled             GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum = "DISABLED"
	GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnumAuto                 GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum = "AUTO"
)

// GoogleCloudRetailV2SearchRequestQueryExpansionSpec
// Specification to determine under which conditions query expansion should occur.
type GoogleCloudRetailV2SearchRequestQueryExpansionSpec struct {
	Condition            *GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum `json:"condition,omitempty"`
	PinUnexpandedResults *bool                                                            `json:"pinUnexpandedResults,omitempty"`
}
