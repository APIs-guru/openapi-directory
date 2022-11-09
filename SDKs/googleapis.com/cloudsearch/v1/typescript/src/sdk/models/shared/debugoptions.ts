import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DebugOptions
/** 
 * Shared request debug options for all cloudsearch RPC methods.
**/
export class DebugOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableDebugging" })
  enableDebugging?: boolean;
}
