import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessConfig
/** 
 * An access config attached to the TPU worker.
**/
export class AccessConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalIp" })
  externalIp?: string;
}
