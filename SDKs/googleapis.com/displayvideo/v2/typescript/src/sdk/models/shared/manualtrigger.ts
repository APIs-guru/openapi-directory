import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManualTriggerStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Inactive = "INACTIVE"
,    Active = "ACTIVE"
}


// ManualTrigger
/** 
 * A single manual trigger in Display & Video 360.
**/
export class ManualTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationDurationMinutes" })
  activationDurationMinutes?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=latestActivationTime" })
  latestActivationTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ManualTriggerStateEnum;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
