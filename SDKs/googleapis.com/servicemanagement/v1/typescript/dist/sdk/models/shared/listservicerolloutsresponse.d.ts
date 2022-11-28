import { SpeakeasyBase } from "../../../internal/utils";
import { Rollout } from "./rollout";
/**
 * Response message for ListServiceRollouts method.
**/
export declare class ListServiceRolloutsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rollouts?: Rollout[];
}
