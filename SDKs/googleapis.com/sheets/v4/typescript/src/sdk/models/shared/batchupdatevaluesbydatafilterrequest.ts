import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilterValueRange } from "./datafiltervaluerange";


export enum BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}

export enum BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}

export enum BatchUpdateValuesByDataFilterRequestValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}


// BatchUpdateValuesByDataFilterRequest
/** 
 * The request for updating more than one range of values in a spreadsheet.
**/
export class BatchUpdateValuesByDataFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: DataFilterValueRange })
  data?: DataFilterValueRange[];

  @SpeakeasyMetadata({ data: "json, name=includeValuesInResponse" })
  includeValuesInResponse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=responseDateTimeRenderOption" })
  responseDateTimeRenderOption?: BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=responseValueRenderOption" })
  responseValueRenderOption?: BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=valueInputOption" })
  valueInputOption?: BatchUpdateValuesByDataFilterRequestValueInputOptionEnum;
}
