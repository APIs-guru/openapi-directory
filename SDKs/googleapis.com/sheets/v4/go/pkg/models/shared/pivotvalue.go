package shared

type PivotValueCalculatedDisplayTypeEnum string

const (
	PivotValueCalculatedDisplayTypeEnumPivotValueCalculatedDisplayTypeUnspecified PivotValueCalculatedDisplayTypeEnum = "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED"
	PivotValueCalculatedDisplayTypeEnumPercentOfRowTotal                          PivotValueCalculatedDisplayTypeEnum = "PERCENT_OF_ROW_TOTAL"
	PivotValueCalculatedDisplayTypeEnumPercentOfColumnTotal                       PivotValueCalculatedDisplayTypeEnum = "PERCENT_OF_COLUMN_TOTAL"
	PivotValueCalculatedDisplayTypeEnumPercentOfGrandTotal                        PivotValueCalculatedDisplayTypeEnum = "PERCENT_OF_GRAND_TOTAL"
)

type PivotValueSummarizeFunctionEnum string

const (
	PivotValueSummarizeFunctionEnumPivotStandardValueFunctionUnspecified PivotValueSummarizeFunctionEnum = "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED"
	PivotValueSummarizeFunctionEnumSum                                   PivotValueSummarizeFunctionEnum = "SUM"
	PivotValueSummarizeFunctionEnumCounta                                PivotValueSummarizeFunctionEnum = "COUNTA"
	PivotValueSummarizeFunctionEnumCount                                 PivotValueSummarizeFunctionEnum = "COUNT"
	PivotValueSummarizeFunctionEnumCountunique                           PivotValueSummarizeFunctionEnum = "COUNTUNIQUE"
	PivotValueSummarizeFunctionEnumAverage                               PivotValueSummarizeFunctionEnum = "AVERAGE"
	PivotValueSummarizeFunctionEnumMax                                   PivotValueSummarizeFunctionEnum = "MAX"
	PivotValueSummarizeFunctionEnumMin                                   PivotValueSummarizeFunctionEnum = "MIN"
	PivotValueSummarizeFunctionEnumMedian                                PivotValueSummarizeFunctionEnum = "MEDIAN"
	PivotValueSummarizeFunctionEnumProduct                               PivotValueSummarizeFunctionEnum = "PRODUCT"
	PivotValueSummarizeFunctionEnumStdev                                 PivotValueSummarizeFunctionEnum = "STDEV"
	PivotValueSummarizeFunctionEnumStdevp                                PivotValueSummarizeFunctionEnum = "STDEVP"
	PivotValueSummarizeFunctionEnumVar                                   PivotValueSummarizeFunctionEnum = "VAR"
	PivotValueSummarizeFunctionEnumVarp                                  PivotValueSummarizeFunctionEnum = "VARP"
	PivotValueSummarizeFunctionEnumCustom                                PivotValueSummarizeFunctionEnum = "CUSTOM"
)

// PivotValue
// The definition of how a value in a pivot table should be calculated.
type PivotValue struct {
	CalculatedDisplayType     *PivotValueCalculatedDisplayTypeEnum `json:"calculatedDisplayType,omitempty"`
	DataSourceColumnReference *DataSourceColumnReference           `json:"dataSourceColumnReference,omitempty"`
	Formula                   *string                              `json:"formula,omitempty"`
	Name                      *string                              `json:"name,omitempty"`
	SourceColumnOffset        *int32                               `json:"sourceColumnOffset,omitempty"`
	SummarizeFunction         *PivotValueSummarizeFunctionEnum     `json:"summarizeFunction,omitempty"`
}
