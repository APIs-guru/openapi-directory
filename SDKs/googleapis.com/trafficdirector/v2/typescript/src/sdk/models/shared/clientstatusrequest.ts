import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeMatcher } from "./nodematcher";



// ClientStatusRequest
/** 
 * Request for client status of clients identified by a list of NodeMatchers.
**/
export class ClientStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeMatchers", elemType: NodeMatcher })
  nodeMatchers?: NodeMatcher[];
}
