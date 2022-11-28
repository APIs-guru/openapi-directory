import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DebugOptions
/** 
 * Shared request debug options for all cloudsearch RPC methods.
**/
export class DebugOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableDebugging" })
  enableDebugging?: boolean;
}
