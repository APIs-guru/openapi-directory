import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDate } from "./googletypedate";

export enum GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum {
    DateFormatUnspecified = "DATE_FORMAT_UNSPECIFIED"
,    LongDate = "LONG_DATE"
,    ShortDate = "SHORT_DATE"
}


// GoogleAppsDriveLabelsV2FieldDateOptions
/** 
 * Options for the date field type.
**/
export class GoogleAppsDriveLabelsV2FieldDateOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateFormat" })
  dateFormat?: string;

  @Metadata({ data: "json, name=dateFormatType" })
  dateFormatType?: GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: GoogleTypeDate;

  @Metadata({ data: "json, name=minValue" })
  minValue?: GoogleTypeDate;
}
