import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";
export declare enum GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum {
    DateFormatUnspecified = "DATE_FORMAT_UNSPECIFIED",
    LongDate = "LONG_DATE",
    ShortDate = "SHORT_DATE"
}
/**
 * Options for the date field type.
**/
export declare class GoogleAppsDriveLabelsV2FieldDateOptions extends SpeakeasyBase {
    dateFormat?: string;
    dateFormatType?: GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum;
    maxValue?: GoogleTypeDate;
    minValue?: GoogleTypeDate;
}
