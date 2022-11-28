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
 * MembershipState describes the state of a Membership resource.
**/
export declare class MembershipState extends SpeakeasyBase {
    code?: MembershipStateCodeEnum;
}
