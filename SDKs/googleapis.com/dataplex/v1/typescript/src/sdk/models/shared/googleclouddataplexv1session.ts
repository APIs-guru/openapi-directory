import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1SessionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1Session
/** 
 * Represents an active analyze session running for a user.
**/
export class GoogleCloudDataplexV1Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1SessionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
