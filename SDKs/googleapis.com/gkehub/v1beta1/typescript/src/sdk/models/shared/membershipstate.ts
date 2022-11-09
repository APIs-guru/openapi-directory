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
 * State of the Membership resource.
**/
export class MembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: MembershipStateCodeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
