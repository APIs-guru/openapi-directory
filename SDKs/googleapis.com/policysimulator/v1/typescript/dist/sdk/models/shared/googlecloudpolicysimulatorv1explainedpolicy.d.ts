import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1BindingExplanation } from "./googlecloudpolicysimulatorv1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";
export declare enum GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about how a specific IAM Policy contributed to the access check.
**/
export declare class GoogleCloudPolicysimulatorV1ExplainedPolicy extends SpeakeasyBase {
    access?: GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum;
    bindingExplanations?: GoogleCloudPolicysimulatorV1BindingExplanation[];
    fullResourceName?: string;
    policy?: GoogleIamV1Policy;
    relevance?: GoogleCloudPolicysimulatorV1ExplainedPolicyRelevanceEnum;
}
