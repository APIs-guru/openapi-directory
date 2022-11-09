import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CellFormat } from "./cellformat";
import { IterativeCalculationSettings } from "./iterativecalculationsettings";
import { SpreadsheetTheme } from "./spreadsheettheme";

export enum SpreadsheetPropertiesAutoRecalcEnum {
    RecalculationIntervalUnspecified = "RECALCULATION_INTERVAL_UNSPECIFIED"
,    OnChange = "ON_CHANGE"
,    Minute = "MINUTE"
,    Hour = "HOUR"
}


// SpreadsheetProperties
/** 
 * Properties of a spreadsheet.
**/
export class SpreadsheetProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRecalc" })
  autoRecalc?: SpreadsheetPropertiesAutoRecalcEnum;

  @Metadata({ data: "json, name=defaultFormat" })
  defaultFormat?: CellFormat;

  @Metadata({ data: "json, name=iterativeCalculationSettings" })
  iterativeCalculationSettings?: IterativeCalculationSettings;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=spreadsheetTheme" })
  spreadsheetTheme?: SpreadsheetTheme;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
