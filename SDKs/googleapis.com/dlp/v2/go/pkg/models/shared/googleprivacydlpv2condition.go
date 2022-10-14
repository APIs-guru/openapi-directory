package shared

type GooglePrivacyDlpV2ConditionOperatorEnum string

const (
	GooglePrivacyDlpV2ConditionOperatorEnumRelationalOperatorUnspecified GooglePrivacyDlpV2ConditionOperatorEnum = "RELATIONAL_OPERATOR_UNSPECIFIED"
	GooglePrivacyDlpV2ConditionOperatorEnumEqualTo                       GooglePrivacyDlpV2ConditionOperatorEnum = "EQUAL_TO"
	GooglePrivacyDlpV2ConditionOperatorEnumNotEqualTo                    GooglePrivacyDlpV2ConditionOperatorEnum = "NOT_EQUAL_TO"
	GooglePrivacyDlpV2ConditionOperatorEnumGreaterThan                   GooglePrivacyDlpV2ConditionOperatorEnum = "GREATER_THAN"
	GooglePrivacyDlpV2ConditionOperatorEnumLessThan                      GooglePrivacyDlpV2ConditionOperatorEnum = "LESS_THAN"
	GooglePrivacyDlpV2ConditionOperatorEnumGreaterThanOrEquals           GooglePrivacyDlpV2ConditionOperatorEnum = "GREATER_THAN_OR_EQUALS"
	GooglePrivacyDlpV2ConditionOperatorEnumLessThanOrEquals              GooglePrivacyDlpV2ConditionOperatorEnum = "LESS_THAN_OR_EQUALS"
	GooglePrivacyDlpV2ConditionOperatorEnumExists                        GooglePrivacyDlpV2ConditionOperatorEnum = "EXISTS"
)

type GooglePrivacyDlpV2Condition struct {
	Field    *GooglePrivacyDlpV2FieldID               `json:"field,omitempty"`
	Operator *GooglePrivacyDlpV2ConditionOperatorEnum `json:"operator,omitempty"`
	Value    *GooglePrivacyDlpV2Value                 `json:"value,omitempty"`
}
