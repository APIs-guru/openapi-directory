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

// GooglePrivacyDlpV2Condition
// The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.
type GooglePrivacyDlpV2Condition struct {
	Field    *GooglePrivacyDlpV2FieldID               `json:"field,omitempty"`
	Operator *GooglePrivacyDlpV2ConditionOperatorEnum `json:"operator,omitempty"`
	Value    *GooglePrivacyDlpV2Value                 `json:"value,omitempty"`
}
