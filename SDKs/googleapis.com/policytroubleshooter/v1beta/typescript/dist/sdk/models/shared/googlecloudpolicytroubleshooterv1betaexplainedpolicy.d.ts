import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicytroubleshooterV1betaBindingExplanation } from "./googlecloudpolicytroubleshooterv1betabindingexplanation";
import { GoogleIamV1Policy } from "./googleiamv1policy";
export declare enum GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
export declare enum GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum {
    HeuristicRelevanceUnspecified = "HEURISTIC_RELEVANCE_UNSPECIFIED",
    Normal = "NORMAL",
    High = "HIGH"
}
/**
 * Details about how a specific IAM Policy contributed to the access check.
**/
export declare class GoogleCloudPolicytroubleshooterV1betaExplainedPolicy extends SpeakeasyBase {
    access?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum;
    bindingExplanations?: GoogleCloudPolicytroubleshooterV1betaBindingExplanation[];
    fullResourceName?: string;
    policy?: GoogleIamV1Policy;
    relevance?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum;
}
