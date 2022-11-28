import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Ok = "OK",
    Failed = "FAILED",
    Unknown = "UNKNOWN"
}


// Status
/** 
 * Status specifies state for the subcomponent.
**/
export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: StatusCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
