import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NfsMount
/** 
 * Configuration for an `NFSMount` to be attached to the VM.
**/
export class NfsMount extends SpeakeasyBase {
  @Metadata({ data: "json, name=target" })
  target?: string;
}
