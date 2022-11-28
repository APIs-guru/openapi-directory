import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NfsMount
/** 
 * Configuration for an `NFSMount` to be attached to the VM.
**/
export class NfsMount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}
