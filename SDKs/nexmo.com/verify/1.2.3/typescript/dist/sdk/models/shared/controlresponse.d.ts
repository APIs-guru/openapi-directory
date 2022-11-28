import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ControlResponseCommandEnum {
    Cancel = "cancel",
    TriggerNextEvent = "trigger_next_event"
}
/**
 * Success
**/
export declare class ControlResponse extends SpeakeasyBase {
    command?: ControlResponseCommandEnum;
    status?: string;
}
