import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3RolloutConfigRolloutStep } from "./googleclouddialogflowcxv3rolloutconfigrolloutstep";
/**
 * The configuration for auto rollout.
**/
export declare class GoogleCloudDialogflowCxV3RolloutConfig extends SpeakeasyBase {
    failureCondition?: string;
    rolloutCondition?: string;
    rolloutSteps?: GoogleCloudDialogflowCxV3RolloutConfigRolloutStep[];
}
