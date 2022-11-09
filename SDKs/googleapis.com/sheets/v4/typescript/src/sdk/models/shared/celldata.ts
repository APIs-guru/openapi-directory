import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceFormula } from "./datasourceformula";
import { DataSourceTable } from "./datasourcetable";
import { DataValidationRule } from "./datavalidationrule";
import { CellFormat } from "./cellformat";
import { ExtendedValue } from "./extendedvalue";
import { PivotTable } from "./pivottable";
import { TextFormatRun } from "./textformatrun";
import { CellFormat } from "./cellformat";
import { ExtendedValue } from "./extendedvalue";


// CellData
/** 
 * Data about a specific cell.
**/
export class CellData extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceFormula" })
  dataSourceFormula?: DataSourceFormula;

  @Metadata({ data: "json, name=dataSourceTable" })
  dataSourceTable?: DataSourceTable;

  @Metadata({ data: "json, name=dataValidation" })
  dataValidation?: DataValidationRule;

  @Metadata({ data: "json, name=effectiveFormat" })
  effectiveFormat?: CellFormat;

  @Metadata({ data: "json, name=effectiveValue" })
  effectiveValue?: ExtendedValue;

  @Metadata({ data: "json, name=formattedValue" })
  formattedValue?: string;

  @Metadata({ data: "json, name=hyperlink" })
  hyperlink?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=pivotTable" })
  pivotTable?: PivotTable;

  @Metadata({ data: "json, name=textFormatRuns", elemType: shared.TextFormatRun })
  textFormatRuns?: TextFormatRun[];

  @Metadata({ data: "json, name=userEnteredFormat" })
  userEnteredFormat?: CellFormat;

  @Metadata({ data: "json, name=userEnteredValue" })
  userEnteredValue?: ExtendedValue;
}
