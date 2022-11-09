import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudPolicytroubleshooterV1ExplainedPolicy } from "./googlecloudpolicytroubleshooterv1explainedpolicy";
export declare enum GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
/**
 * Response for TroubleshootIamPolicy.
**/
export declare class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse extends SpeakeasyBase {
    access?: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum;
    errors?: GoogleRpcStatus[];
    explainedPolicies?: GoogleCloudPolicytroubleshooterV1ExplainedPolicy[];
}
