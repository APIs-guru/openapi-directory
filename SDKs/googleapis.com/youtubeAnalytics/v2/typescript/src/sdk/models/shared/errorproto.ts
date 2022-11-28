import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ErrorProtoLocationTypeEnum {
    Path = "PATH",
    Other = "OTHER",
    Parameter = "PARAMETER"
}


// ErrorProto
/** 
 * Describes one specific error.
**/
export class ErrorProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=argument" })
  argument?: string[];

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=externalErrorMessage" })
  externalErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: ErrorProtoLocationTypeEnum;
}
