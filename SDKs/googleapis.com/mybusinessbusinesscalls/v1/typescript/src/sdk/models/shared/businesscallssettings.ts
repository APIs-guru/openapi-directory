import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BusinessCallsSettingsCallsStateEnum {
    CallsStateUnspecified = "CALLS_STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


// BusinessCallsSettings
/** 
 * Business calls settings for a location.
**/
export class BusinessCallsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=callsState" })
  callsState?: BusinessCallsSettingsCallsStateEnum;

  @Metadata({ data: "json, name=consentTime" })
  consentTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
