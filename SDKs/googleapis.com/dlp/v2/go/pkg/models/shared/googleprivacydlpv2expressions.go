package shared

type GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum string

const (
	GooglePrivacyDlpV2ExpressionsLogicalOperatorEnumLogicalOperatorUnspecified GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum = "LOGICAL_OPERATOR_UNSPECIFIED"
	GooglePrivacyDlpV2ExpressionsLogicalOperatorEnumAnd                        GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum = "AND"
)

type GooglePrivacyDlpV2Expressions struct {
	Conditions      *GooglePrivacyDlpV2Conditions                     `json:"conditions,omitempty"`
	LogicalOperator *GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum `json:"logicalOperator,omitempty"`
}
