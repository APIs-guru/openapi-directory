import { SpeakeasyBase } from "../../../internal/utils";
import { Rollout } from "./rollout";
/**
 * ListRolloutsResponse is the response object reutrned by `ListRollouts`.
**/
export declare class ListRolloutsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rollouts?: Rollout[];
    unreachable?: string[];
}
