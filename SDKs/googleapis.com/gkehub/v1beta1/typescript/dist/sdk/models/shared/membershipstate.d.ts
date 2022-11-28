import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MembershipStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING",
    ServiceUpdating = "SERVICE_UPDATING"
}
/**
 * State of the Membership resource.
**/
export declare class MembershipStateInput extends SpeakeasyBase {
    description?: string;
    updateTime?: string;
}
/**
 * State of the Membership resource.
**/
export declare class MembershipState extends SpeakeasyBase {
    code?: MembershipStateCodeEnum;
    description?: string;
    updateTime?: string;
}
