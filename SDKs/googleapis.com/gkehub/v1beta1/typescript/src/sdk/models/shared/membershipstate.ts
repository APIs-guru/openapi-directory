import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING",
    ServiceUpdating = "SERVICE_UPDATING"
}


// MembershipStateInput
/** 
 * State of the Membership resource.
**/
export class MembershipStateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// MembershipState
/** 
 * State of the Membership resource.
**/
export class MembershipState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: MembershipStateCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
