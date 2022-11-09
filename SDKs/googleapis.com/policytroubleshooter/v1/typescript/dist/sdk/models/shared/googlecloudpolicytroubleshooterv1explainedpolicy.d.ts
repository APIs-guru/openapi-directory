import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicytroubleshooterV1BindingExplanation } from "./googlecloudpolicytroubleshooterv1bindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";
export declare enum GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about how a specific IAM Policy contributed to the access check.
**/
export declare class GoogleCloudPolicytroubleshooterV1ExplainedPolicy extends SpeakeasyBase {
    access?: GoogleCloudPolicytroubleshooterV1ExplainedPolicyAccessEnum;
    bindingExplanations?: GoogleCloudPolicytroubleshooterV1BindingExplanation[];
    fullResourceName?: string;
    policy?: GoogleIamV1Policy;
    relevance?: GoogleCloudPolicytroubleshooterV1ExplainedPolicyRelevanceEnum;
}
