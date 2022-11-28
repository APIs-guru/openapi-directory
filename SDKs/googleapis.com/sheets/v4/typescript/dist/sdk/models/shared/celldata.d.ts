import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceFormula } from "./datasourceformula";
import { DataSourceTable } from "./datasourcetable";
import { DataValidationRule } from "./datavalidationrule";
import { CellFormat } from "./cellformat";
import { ExtendedValue } from "./extendedvalue";
import { PivotTable } from "./pivottable";
import { TextFormatRun } from "./textformatrun";
/**
 * Data about a specific cell.
**/
export declare class CellData extends SpeakeasyBase {
    dataSourceFormula?: DataSourceFormula;
    dataSourceTable?: DataSourceTable;
    dataValidation?: DataValidationRule;
    effectiveFormat?: CellFormat;
    effectiveValue?: ExtendedValue;
    formattedValue?: string;
    hyperlink?: string;
    note?: string;
    pivotTable?: PivotTable;
    textFormatRuns?: TextFormatRun[];
    userEnteredFormat?: CellFormat;
    userEnteredValue?: ExtendedValue;
}
