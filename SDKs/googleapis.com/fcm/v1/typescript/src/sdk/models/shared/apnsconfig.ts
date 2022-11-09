import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsFcmOptions } from "./apnsfcmoptions";


// ApnsConfig
/** 
 * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
**/
export class ApnsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=fcmOptions" })
  fcmOptions?: ApnsFcmOptions;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;
}
