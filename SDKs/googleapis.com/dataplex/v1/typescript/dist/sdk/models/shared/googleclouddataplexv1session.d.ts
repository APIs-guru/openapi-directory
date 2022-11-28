import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1SessionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * Represents an active analyze session running for a user.
**/
export declare class GoogleCloudDataplexV1Session extends SpeakeasyBase {
    createTime?: string;
    name?: string;
    state?: GoogleCloudDataplexV1SessionStateEnum;
    userId?: string;
}
