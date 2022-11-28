import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BusinessCallsSettingsCallsStateEnum {
    CallsStateUnspecified = "CALLS_STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Business calls settings for a location.
**/
export declare class BusinessCallsSettings extends SpeakeasyBase {
    callsState?: BusinessCallsSettingsCallsStateEnum;
    consentTime?: string;
    name?: string;
}
