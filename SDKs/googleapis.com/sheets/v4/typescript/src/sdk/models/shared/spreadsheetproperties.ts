import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CellFormat } from "./cellformat";
import { IterativeCalculationSettings } from "./iterativecalculationsettings";
import { SpreadsheetTheme } from "./spreadsheettheme";


export enum SpreadsheetPropertiesAutoRecalcEnum {
    RecalculationIntervalUnspecified = "RECALCULATION_INTERVAL_UNSPECIFIED",
    OnChange = "ON_CHANGE",
    Minute = "MINUTE",
    Hour = "HOUR"
}


// SpreadsheetProperties
/** 
 * Properties of a spreadsheet.
**/
export class SpreadsheetProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRecalc" })
  autoRecalc?: SpreadsheetPropertiesAutoRecalcEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultFormat" })
  defaultFormat?: CellFormat;

  @SpeakeasyMetadata({ data: "json, name=iterativeCalculationSettings" })
  iterativeCalculationSettings?: IterativeCalculationSettings;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=spreadsheetTheme" })
  spreadsheetTheme?: SpreadsheetTheme;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
