import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1SessionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    ActionRequired = "ACTION_REQUIRED"
}


// GoogleCloudDataplexV1Session
/** 
 * Represents an active analyze session running for a user.
**/
export class GoogleCloudDataplexV1Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1SessionStateEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
