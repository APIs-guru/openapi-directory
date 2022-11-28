import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1Policy } from "./googleiamv1policy";
export declare enum GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum {
    LogSourceUnspecified = "LOG_SOURCE_UNSPECIFIED",
    RecentAccesses = "RECENT_ACCESSES"
}
/**
 * The configuration used for a Replay.
**/
export declare class GoogleCloudPolicysimulatorV1beta1ReplayConfig extends SpeakeasyBase {
    logSource?: GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum;
    policyOverlay?: Map<string, GoogleIamV1Policy>;
}
