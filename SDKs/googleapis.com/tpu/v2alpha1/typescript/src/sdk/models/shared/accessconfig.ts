import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessConfig
/** 
 * An access config attached to the TPU worker.
**/
export class AccessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalIp" })
  externalIp?: string;
}
