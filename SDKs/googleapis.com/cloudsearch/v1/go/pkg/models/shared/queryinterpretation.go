package shared

type QueryInterpretationInterpretationTypeEnum string

const (
	QueryInterpretationInterpretationTypeEnumNone    QueryInterpretationInterpretationTypeEnum = "NONE"
	QueryInterpretationInterpretationTypeEnumBlend   QueryInterpretationInterpretationTypeEnum = "BLEND"
	QueryInterpretationInterpretationTypeEnumReplace QueryInterpretationInterpretationTypeEnum = "REPLACE"
)

type QueryInterpretationReasonEnum string

const (
	QueryInterpretationReasonEnumUnspecified                       QueryInterpretationReasonEnum = "UNSPECIFIED"
	QueryInterpretationReasonEnumQueryHasNaturalLanguageIntent     QueryInterpretationReasonEnum = "QUERY_HAS_NATURAL_LANGUAGE_INTENT"
	QueryInterpretationReasonEnumNotEnoughResultsFoundForUserQuery QueryInterpretationReasonEnum = "NOT_ENOUGH_RESULTS_FOUND_FOR_USER_QUERY"
)

type QueryInterpretation struct {
	InterpretationType *QueryInterpretationInterpretationTypeEnum `json:"interpretationType,omitempty"`
	InterpretedQuery   *string                                    `json:"interpretedQuery,omitempty"`
	Reason             *QueryInterpretationReasonEnum             `json:"reason,omitempty"`
}
