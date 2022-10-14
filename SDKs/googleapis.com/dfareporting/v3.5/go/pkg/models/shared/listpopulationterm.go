package shared

type ListPopulationTermOperatorEnum string

const (
	ListPopulationTermOperatorEnumNumEquals           ListPopulationTermOperatorEnum = "NUM_EQUALS"
	ListPopulationTermOperatorEnumNumLessThan         ListPopulationTermOperatorEnum = "NUM_LESS_THAN"
	ListPopulationTermOperatorEnumNumLessThanEqual    ListPopulationTermOperatorEnum = "NUM_LESS_THAN_EQUAL"
	ListPopulationTermOperatorEnumNumGreaterThan      ListPopulationTermOperatorEnum = "NUM_GREATER_THAN"
	ListPopulationTermOperatorEnumNumGreaterThanEqual ListPopulationTermOperatorEnum = "NUM_GREATER_THAN_EQUAL"
	ListPopulationTermOperatorEnumStringEquals        ListPopulationTermOperatorEnum = "STRING_EQUALS"
	ListPopulationTermOperatorEnumStringContains      ListPopulationTermOperatorEnum = "STRING_CONTAINS"
)

type ListPopulationTermTypeEnum string

const (
	ListPopulationTermTypeEnumCustomVariableTerm ListPopulationTermTypeEnum = "CUSTOM_VARIABLE_TERM"
	ListPopulationTermTypeEnumListMembershipTerm ListPopulationTermTypeEnum = "LIST_MEMBERSHIP_TERM"
	ListPopulationTermTypeEnumReferrerTerm       ListPopulationTermTypeEnum = "REFERRER_TERM"
)

type ListPopulationTerm struct {
	Contains             *bool                           `json:"contains,omitempty"`
	Negation             *bool                           `json:"negation,omitempty"`
	Operator             *ListPopulationTermOperatorEnum `json:"operator,omitempty"`
	RemarketingListID    *string                         `json:"remarketingListId,omitempty"`
	Type                 *ListPopulationTermTypeEnum     `json:"type,omitempty"`
	Value                *string                         `json:"value,omitempty"`
	VariableFriendlyName *string                         `json:"variableFriendlyName,omitempty"`
	VariableName         *string                         `json:"variableName,omitempty"`
}
