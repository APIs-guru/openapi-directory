package shared

type GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum string

const (
	GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnumConditionUnspecified GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum = "CONDITION_UNSPECIFIED"
	GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnumDisabled             GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum = "DISABLED"
	GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnumAuto                 GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum = "AUTO"
)

// GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec
// Specification to determine under which conditions query expansion should occur.
type GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec struct {
	Condition            *GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum `json:"condition,omitempty"`
	PinUnexpandedResults *bool                                                                `json:"pinUnexpandedResults,omitempty"`
}
