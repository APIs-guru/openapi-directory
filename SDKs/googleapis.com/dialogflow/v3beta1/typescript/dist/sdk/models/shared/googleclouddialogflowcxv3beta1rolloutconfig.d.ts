import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep } from "./googleclouddialogflowcxv3beta1rolloutconfigrolloutstep";
/**
 * The configuration for auto rollout.
**/
export declare class GoogleCloudDialogflowCxV3beta1RolloutConfig extends SpeakeasyBase {
    failureCondition?: string;
    rolloutCondition?: string;
    rolloutSteps?: GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep[];
}
