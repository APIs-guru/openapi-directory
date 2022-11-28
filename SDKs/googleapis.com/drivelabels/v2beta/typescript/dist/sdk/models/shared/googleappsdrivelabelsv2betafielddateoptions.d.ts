import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
export declare enum GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum {
    DateFormatUnspecified = "DATE_FORMAT_UNSPECIFIED",
    LongDate = "LONG_DATE",
    ShortDate = "SHORT_DATE"
}
/**
 * Options for the date field type.
**/
export declare class GoogleAppsDriveLabelsV2betaFieldDateOptions extends SpeakeasyBase {
    dateFormat?: string;
    dateFormatType?: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;
    maxValue?: GoogleTypeDate;
    minValue?: GoogleTypeDate;
}
/**
 * Options for the date field type.
**/
export declare class GoogleAppsDriveLabelsV2betaFieldDateOptionsInput extends SpeakeasyBase {
    dateFormatType?: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;
    maxValue?: GoogleTypeDate;
    minValue?: GoogleTypeDate;
}
