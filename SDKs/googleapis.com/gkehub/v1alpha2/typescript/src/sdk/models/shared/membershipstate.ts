import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING",
    ServiceUpdating = "SERVICE_UPDATING"
}


// MembershipState
/** 
 * MembershipState describes the state of a Membership resource.
**/
export class MembershipState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: MembershipStateCodeEnum;
}
