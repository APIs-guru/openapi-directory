import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Standard rollout policy is the default policy for blue-green.
**/
export declare class StandardRolloutPolicy extends SpeakeasyBase {
    batchNodeCount?: number;
    batchPercentage?: number;
    batchSoakDuration?: string;
}
