import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataFilterValueRange } from "./datafiltervaluerange";

export enum BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER"
,    FormattedString = "FORMATTED_STRING"
}

export enum BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE"
,    UnformattedValue = "UNFORMATTED_VALUE"
,    Formula = "FORMULA"
}

export enum BatchUpdateValuesByDataFilterRequestValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED"
,    Raw = "RAW"
,    UserEntered = "USER_ENTERED"
}


// BatchUpdateValuesByDataFilterRequest
/** 
 * The request for updating more than one range of values in a spreadsheet.
**/
export class BatchUpdateValuesByDataFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.DataFilterValueRange })
  data?: DataFilterValueRange[];

  @Metadata({ data: "json, name=includeValuesInResponse" })
  includeValuesInResponse?: boolean;

  @Metadata({ data: "json, name=responseDateTimeRenderOption" })
  responseDateTimeRenderOption?: BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum;

  @Metadata({ data: "json, name=responseValueRenderOption" })
  responseValueRenderOption?: BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum;

  @Metadata({ data: "json, name=valueInputOption" })
  valueInputOption?: BatchUpdateValuesByDataFilterRequestValueInputOptionEnum;
}
