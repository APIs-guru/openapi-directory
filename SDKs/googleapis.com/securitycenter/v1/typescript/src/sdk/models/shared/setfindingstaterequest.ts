import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SetFindingStateRequestStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// SetFindingStateRequest
/** 
 * Request message for updating a finding's state.
**/
export class SetFindingStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: SetFindingStateRequestStateEnum;
}
