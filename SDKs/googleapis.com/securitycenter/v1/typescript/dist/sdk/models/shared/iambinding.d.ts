import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IamBindingActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE"
}
/**
 * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
**/
export declare class IamBinding extends SpeakeasyBase {
    action?: IamBindingActionEnum;
    member?: string;
    role?: string;
}
