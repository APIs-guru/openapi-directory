import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InternalCheckerStateEnum {
    Unspecified = "UNSPECIFIED",
    Creating = "CREATING",
    Running = "RUNNING"
}
/**
 * An internal checker allows Uptime checks to run on private/internal GCP resources.
**/
export declare class InternalChecker extends SpeakeasyBase {
    displayName?: string;
    gcpZone?: string;
    name?: string;
    network?: string;
    peerProjectId?: string;
    state?: InternalCheckerStateEnum;
}
