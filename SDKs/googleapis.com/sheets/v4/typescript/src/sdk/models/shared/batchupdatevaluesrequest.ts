import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";


export enum BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}

export enum BatchUpdateValuesRequestResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}

export enum BatchUpdateValuesRequestValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}


// BatchUpdateValuesRequest
/** 
 * The request for updating more than one range of values in a spreadsheet.
**/
export class BatchUpdateValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ValueRange })
  data?: ValueRange[];

  @SpeakeasyMetadata({ data: "json, name=includeValuesInResponse" })
  includeValuesInResponse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=responseDateTimeRenderOption" })
  responseDateTimeRenderOption?: BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=responseValueRenderOption" })
  responseValueRenderOption?: BatchUpdateValuesRequestResponseValueRenderOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=valueInputOption" })
  valueInputOption?: BatchUpdateValuesRequestValueInputOptionEnum;
}
