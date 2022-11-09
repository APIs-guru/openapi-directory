import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RpcResponse
/** 
 * Object containing the JSON response from the Neblio node.
**/
export class RpcResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}
