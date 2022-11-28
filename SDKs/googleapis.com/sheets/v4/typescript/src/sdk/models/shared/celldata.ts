import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceFormula } from "./datasourceformula";
import { DataSourceTable } from "./datasourcetable";
import { DataValidationRule } from "./datavalidationrule";
import { CellFormat } from "./cellformat";
import { ExtendedValue } from "./extendedvalue";
import { PivotTable } from "./pivottable";
import { TextFormatRun } from "./textformatrun";



// CellData
/** 
 * Data about a specific cell.
**/
export class CellData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceFormula" })
  dataSourceFormula?: DataSourceFormula;

  @SpeakeasyMetadata({ data: "json, name=dataSourceTable" })
  dataSourceTable?: DataSourceTable;

  @SpeakeasyMetadata({ data: "json, name=dataValidation" })
  dataValidation?: DataValidationRule;

  @SpeakeasyMetadata({ data: "json, name=effectiveFormat" })
  effectiveFormat?: CellFormat;

  @SpeakeasyMetadata({ data: "json, name=effectiveValue" })
  effectiveValue?: ExtendedValue;

  @SpeakeasyMetadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @SpeakeasyMetadata({ data: "json, name=hyperlink" })
  hyperlink?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=pivotTable" })
  pivotTable?: PivotTable;

  @SpeakeasyMetadata({ data: "json, name=textFormatRuns", elemType: TextFormatRun })
  textFormatRuns?: TextFormatRun[];

  @SpeakeasyMetadata({ data: "json, name=userEnteredFormat" })
  userEnteredFormat?: CellFormat;

  @SpeakeasyMetadata({ data: "json, name=userEnteredValue" })
  userEnteredValue?: ExtendedValue;
}
