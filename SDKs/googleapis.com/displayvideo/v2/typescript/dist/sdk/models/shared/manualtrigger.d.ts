import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ManualTriggerStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Inactive = "INACTIVE",
    Active = "ACTIVE"
}
/**
 * A single manual trigger in Display & Video 360.
**/
export declare class ManualTrigger extends SpeakeasyBase {
    activationDurationMinutes?: string;
    advertiserId?: string;
    displayName?: string;
    latestActivationTime?: string;
    name?: string;
    state?: ManualTriggerStateEnum;
    triggerId?: string;
}
/**
 * A single manual trigger in Display & Video 360.
**/
export declare class ManualTriggerInput extends SpeakeasyBase {
    activationDurationMinutes?: string;
    advertiserId?: string;
    displayName?: string;
}
