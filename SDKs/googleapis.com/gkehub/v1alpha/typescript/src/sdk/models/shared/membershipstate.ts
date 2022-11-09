import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
,    ServiceUpdating = "SERVICE_UPDATING"
}


// MembershipState
/** 
 * MembershipState describes the state of a Membership resource.
**/
export class MembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: MembershipStateCodeEnum;
}
