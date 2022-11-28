import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1beta1BindingExplanation } from "./googlecloudpolicysimulatorv1beta1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";
export declare enum GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about how a specific IAM Policy contributed to the access check.
**/
export declare class GoogleCloudPolicysimulatorV1beta1ExplainedPolicy extends SpeakeasyBase {
    access?: GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum;
    bindingExplanations?: GoogleCloudPolicysimulatorV1beta1BindingExplanation[];
    fullResourceName?: string;
    policy?: GoogleIamV1Policy;
    relevance?: GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum;
}
