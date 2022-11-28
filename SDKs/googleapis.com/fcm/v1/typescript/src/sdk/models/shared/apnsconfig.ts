import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApnsFcmOptions } from "./apnsfcmoptions";



// ApnsConfig
/** 
 * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
**/
export class ApnsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fcmOptions" })
  fcmOptions?: ApnsFcmOptions;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;
}
