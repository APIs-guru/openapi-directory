import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";


export enum GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum {
    DateFormatUnspecified = "DATE_FORMAT_UNSPECIFIED",
    LongDate = "LONG_DATE",
    ShortDate = "SHORT_DATE"
}


// GoogleAppsDriveLabelsV2betaFieldDateOptions
/** 
 * Options for the date field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldDateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateFormat" })
  dateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=dateFormatType" })
  dateFormatType?: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: GoogleTypeDate;
}


// GoogleAppsDriveLabelsV2betaFieldDateOptionsInput
/** 
 * Options for the date field type.
**/
export class GoogleAppsDriveLabelsV2betaFieldDateOptionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateFormatType" })
  dateFormatType?: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: GoogleTypeDate;
}
