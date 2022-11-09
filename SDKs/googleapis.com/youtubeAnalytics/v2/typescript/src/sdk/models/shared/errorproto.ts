import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ErrorProtoLocationTypeEnum {
    Path = "PATH"
,    Other = "OTHER"
,    Parameter = "PARAMETER"
}


// ErrorProto
/** 
 * Describes one specific error.
**/
export class ErrorProto extends SpeakeasyBase {
  @Metadata({ data: "json, name=argument" })
  argument?: string[];

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=externalErrorMessage" })
  externalErrorMessage?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=locationType" })
  locationType?: ErrorProtoLocationTypeEnum;
}
