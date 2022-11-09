import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";

export enum PivotValueCalculatedDisplayTypeEnum {
    PivotValueCalculatedDisplayTypeUnspecified = "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED"
,    PercentOfRowTotal = "PERCENT_OF_ROW_TOTAL"
,    PercentOfColumnTotal = "PERCENT_OF_COLUMN_TOTAL"
,    PercentOfGrandTotal = "PERCENT_OF_GRAND_TOTAL"
}

export enum PivotValueSummarizeFunctionEnum {
    PivotStandardValueFunctionUnspecified = "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED"
,    Sum = "SUM"
,    Counta = "COUNTA"
,    Count = "COUNT"
,    Countunique = "COUNTUNIQUE"
,    Average = "AVERAGE"
,    Max = "MAX"
,    Min = "MIN"
,    Median = "MEDIAN"
,    Product = "PRODUCT"
,    Stdev = "STDEV"
,    Stdevp = "STDEVP"
,    Var = "VAR"
,    Varp = "VARP"
,    Custom = "CUSTOM"
}


// PivotValue
/** 
 * The definition of how a value in a pivot table should be calculated.
**/
export class PivotValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=calculatedDisplayType" })
  calculatedDisplayType?: PivotValueCalculatedDisplayTypeEnum;

  @Metadata({ data: "json, name=dataSourceColumnReference" })
  dataSourceColumnReference?: DataSourceColumnReference;

  @Metadata({ data: "json, name=formula" })
  formula?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourceColumnOffset" })
  sourceColumnOffset?: number;

  @Metadata({ data: "json, name=summarizeFunction" })
  summarizeFunction?: PivotValueSummarizeFunctionEnum;
}
