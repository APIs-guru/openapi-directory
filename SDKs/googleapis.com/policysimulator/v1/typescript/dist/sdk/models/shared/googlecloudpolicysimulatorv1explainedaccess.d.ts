import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudPolicysimulatorV1ExplainedPolicy } from "./googlecloudpolicysimulatorv1explainedpolicy";
export declare enum GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    NotGranted = "NOT_GRANTED",
    UnknownConditional = "UNKNOWN_CONDITIONAL",
    UnknownInfoDenied = "UNKNOWN_INFO_DENIED"
}
/**
 * Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple.
**/
export declare class GoogleCloudPolicysimulatorV1ExplainedAccess extends SpeakeasyBase {
    accessState?: GoogleCloudPolicysimulatorV1ExplainedAccessAccessStateEnum;
    errors?: GoogleRpcStatus[];
    policies?: GoogleCloudPolicysimulatorV1ExplainedPolicy[];
}
