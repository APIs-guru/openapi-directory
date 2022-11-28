import { SpeakeasyBase } from "../../../internal/utils";
import { FailedData } from "./faileddata";
export declare enum QueuedResourceStateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Accepted = "ACCEPTED",
    Provisioning = "PROVISIONING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Active = "ACTIVE",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED"
}
/**
 * QueuedResourceState defines the details of the QueuedResource request.
**/
export declare class QueuedResourceState extends SpeakeasyBase {
    acceptedData?: Map<string, any>;
    activeData?: Map<string, any>;
    creatingData?: Map<string, any>;
    deletingData?: Map<string, any>;
    failedData?: FailedData;
    provisioningData?: Map<string, any>;
    state?: QueuedResourceStateStateEnum;
    suspendedData?: Map<string, any>;
    suspendingData?: Map<string, any>;
}
