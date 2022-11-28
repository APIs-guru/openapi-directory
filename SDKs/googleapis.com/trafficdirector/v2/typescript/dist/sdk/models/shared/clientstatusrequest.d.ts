import { SpeakeasyBase } from "../../../internal/utils";
import { NodeMatcher } from "./nodematcher";
/**
 * Request for client status of clients identified by a list of NodeMatchers.
**/
export declare class ClientStatusRequest extends SpeakeasyBase {
    nodeMatchers?: NodeMatcher[];
}
