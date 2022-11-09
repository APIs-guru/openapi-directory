import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicytroubleshooterV1betaExplainedPolicy } from "./googlecloudpolicytroubleshooterv1betaexplainedpolicy";
export declare enum GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
/**
 * Response for TroubleshootIamPolicy.
**/
export declare class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse extends SpeakeasyBase {
    access?: GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum;
    explainedPolicies?: GoogleCloudPolicytroubleshooterV1betaExplainedPolicy[];
}
