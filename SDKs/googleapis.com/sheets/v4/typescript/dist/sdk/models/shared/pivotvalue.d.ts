import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
export declare enum PivotValueCalculatedDisplayTypeEnum {
    PivotValueCalculatedDisplayTypeUnspecified = "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
    PercentOfRowTotal = "PERCENT_OF_ROW_TOTAL",
    PercentOfColumnTotal = "PERCENT_OF_COLUMN_TOTAL",
    PercentOfGrandTotal = "PERCENT_OF_GRAND_TOTAL"
}
export declare enum PivotValueSummarizeFunctionEnum {
    PivotStandardValueFunctionUnspecified = "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED",
    Sum = "SUM",
    Counta = "COUNTA",
    Count = "COUNT",
    Countunique = "COUNTUNIQUE",
    Average = "AVERAGE",
    Max = "MAX",
    Min = "MIN",
    Median = "MEDIAN",
    Product = "PRODUCT",
    Stdev = "STDEV",
    Stdevp = "STDEVP",
    Var = "VAR",
    Varp = "VARP",
    Custom = "CUSTOM"
}
/**
 * The definition of how a value in a pivot table should be calculated.
**/
export declare class PivotValue extends SpeakeasyBase {
    calculatedDisplayType?: PivotValueCalculatedDisplayTypeEnum;
    dataSourceColumnReference?: DataSourceColumnReference;
    formula?: string;
    name?: string;
    sourceColumnOffset?: number;
    summarizeFunction?: PivotValueSummarizeFunctionEnum;
}
