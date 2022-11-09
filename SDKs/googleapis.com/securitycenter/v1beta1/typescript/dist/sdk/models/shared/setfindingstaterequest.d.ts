import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SetFindingStateRequestStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Request message for updating a finding's state.
**/
export declare class SetFindingStateRequest extends SpeakeasyBase {
    startTime?: string;
    state?: SetFindingStateRequestStateEnum;
}
