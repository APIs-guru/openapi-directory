package shared

type GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum string

const (
	GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnumConditionUnspecified GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum = "CONDITION_UNSPECIFIED"
	GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnumDisabled             GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum = "DISABLED"
	GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnumAuto                 GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum = "AUTO"
)

type GoogleCloudRetailV2SearchRequestQueryExpansionSpec struct {
	Condition            *GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum `json:"condition"`
	PinUnexpandedResults *bool                                                            `json:"pinUnexpandedResults"`
}
