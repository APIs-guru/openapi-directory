import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleFirestoreAdminV1TtlConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    NeedsRepair = "NEEDS_REPAIR"
}
/**
 * The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document.
**/
export declare class GoogleFirestoreAdminV1TtlConfig extends SpeakeasyBase {
    state?: GoogleFirestoreAdminV1TtlConfigStateEnum;
}
