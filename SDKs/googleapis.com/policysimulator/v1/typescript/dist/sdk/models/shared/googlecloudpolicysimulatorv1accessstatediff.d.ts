import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1ExplainedAccess } from "./googlecloudpolicysimulatorv1explainedaccess";
export declare enum GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum {
    AccessChangeTypeUnspecified = "ACCESS_CHANGE_TYPE_UNSPECIFIED",
    NoChange = "NO_CHANGE",
    UnknownChange = "UNKNOWN_CHANGE",
    AccessRevoked = "ACCESS_REVOKED",
    AccessGained = "ACCESS_GAINED",
    AccessMaybeRevoked = "ACCESS_MAYBE_REVOKED",
    AccessMaybeGained = "ACCESS_MAYBE_GAINED"
}
/**
 * A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
**/
export declare class GoogleCloudPolicysimulatorV1AccessStateDiff extends SpeakeasyBase {
    accessChange?: GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum;
    baseline?: GoogleCloudPolicysimulatorV1ExplainedAccess;
    simulated?: GoogleCloudPolicysimulatorV1ExplainedAccess;
}
