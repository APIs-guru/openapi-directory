import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ManualTriggerStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE"
}


// ManualTrigger
/** 
 * A single manual trigger in Display & Video 360.
**/
export class ManualTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationDurationMinutes" })
  activationDurationMinutes?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=latestActivationTime" })
  latestActivationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ManualTriggerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;
}


// ManualTriggerInput
/** 
 * A single manual trigger in Display & Video 360.
**/
export class ManualTriggerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationDurationMinutes" })
  activationDurationMinutes?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}
