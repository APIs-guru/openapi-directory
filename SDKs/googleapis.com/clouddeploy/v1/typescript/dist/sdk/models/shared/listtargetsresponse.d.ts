import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
/**
 * The response object from `ListTargets`.
**/
export declare class ListTargetsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    targets?: Target[];
    unreachable?: string[];
}
