import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RpcResponse
/** 
 * Object containing the JSON response from the Neblio node.
**/
export class RpcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}
