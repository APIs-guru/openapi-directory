import { SpeakeasyBase } from "../../../internal/utils";
import { CellFormat } from "./cellformat";
import { IterativeCalculationSettings } from "./iterativecalculationsettings";
import { SpreadsheetTheme } from "./spreadsheettheme";
export declare enum SpreadsheetPropertiesAutoRecalcEnum {
    RecalculationIntervalUnspecified = "RECALCULATION_INTERVAL_UNSPECIFIED",
    OnChange = "ON_CHANGE",
    Minute = "MINUTE",
    Hour = "HOUR"
}
/**
 * Properties of a spreadsheet.
**/
export declare class SpreadsheetProperties extends SpeakeasyBase {
    autoRecalc?: SpreadsheetPropertiesAutoRecalcEnum;
    defaultFormat?: CellFormat;
    iterativeCalculationSettings?: IterativeCalculationSettings;
    locale?: string;
    spreadsheetTheme?: SpreadsheetTheme;
    timeZone?: string;
    title?: string;
}
