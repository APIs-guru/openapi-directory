import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";


export enum GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum {
    DateFormatUnspecified = "DATE_FORMAT_UNSPECIFIED",
    LongDate = "LONG_DATE",
    ShortDate = "SHORT_DATE"
}


// GoogleAppsDriveLabelsV2FieldDateOptions
/** 
 * Options for the date field type.
**/
export class GoogleAppsDriveLabelsV2FieldDateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateFormat" })
  dateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=dateFormatType" })
  dateFormatType?: GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: GoogleTypeDate;
}
