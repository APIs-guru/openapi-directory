import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SetFindingStateRequestStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// SetFindingStateRequest
/** 
 * Request message for updating a finding's state.
**/
export class SetFindingStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SetFindingStateRequestStateEnum;
}
