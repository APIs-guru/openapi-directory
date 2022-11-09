import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValueRange } from "./valuerange";

export enum BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER"
,    FormattedString = "FORMATTED_STRING"
}

export enum BatchUpdateValuesRequestResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE"
,    UnformattedValue = "UNFORMATTED_VALUE"
,    Formula = "FORMULA"
}

export enum BatchUpdateValuesRequestValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED"
,    Raw = "RAW"
,    UserEntered = "USER_ENTERED"
}


// BatchUpdateValuesRequest
/** 
 * The request for updating more than one range of values in a spreadsheet.
**/
export class BatchUpdateValuesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ValueRange })
  data?: ValueRange[];

  @Metadata({ data: "json, name=includeValuesInResponse" })
  includeValuesInResponse?: boolean;

  @Metadata({ data: "json, name=responseDateTimeRenderOption" })
  responseDateTimeRenderOption?: BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum;

  @Metadata({ data: "json, name=responseValueRenderOption" })
  responseValueRenderOption?: BatchUpdateValuesRequestResponseValueRenderOptionEnum;

  @Metadata({ data: "json, name=valueInputOption" })
  valueInputOption?: BatchUpdateValuesRequestValueInputOptionEnum;
}
