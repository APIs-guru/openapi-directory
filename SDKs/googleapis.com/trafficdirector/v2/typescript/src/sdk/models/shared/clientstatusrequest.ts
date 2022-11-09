import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NodeMatcher } from "./nodematcher";


// ClientStatusRequest
/** 
 * Request for client status of clients identified by a list of NodeMatchers.
**/
export class ClientStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeMatchers", elemType: shared.NodeMatcher })
  nodeMatchers?: NodeMatcher[];
}
