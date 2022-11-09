import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    Ok = "OK"
,    Failed = "FAILED"
,    Unknown = "UNKNOWN"
}


// Status
/** 
 * Status specifies state for the subcomponent.
**/
export class Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: StatusCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;
}
