import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
**/
export declare class GoogleCloudRunV1Condition extends SpeakeasyBase {
    lastTransitionTime?: string;
    message?: string;
    reason?: string;
    severity?: string;
    status?: string;
    type?: string;
}
