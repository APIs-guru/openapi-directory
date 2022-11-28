import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BusinessCallsSettingsCallsStateEnum {
    CallsStateUnspecified = "CALLS_STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


// BusinessCallsSettings
/** 
 * Business calls settings for a location.
**/
export class BusinessCallsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callsState" })
  callsState?: BusinessCallsSettingsCallsStateEnum;

  @SpeakeasyMetadata({ data: "json, name=consentTime" })
  consentTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
