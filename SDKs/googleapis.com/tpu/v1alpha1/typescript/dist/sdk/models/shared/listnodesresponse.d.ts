import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Node } from "./node";
/**
 * Response for ListNodes.
**/
export declare class ListNodesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    nodes?: Node[];
    unreachable?: string[];
}
