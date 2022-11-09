import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ControlRequestCmdEnum {
    Cancel = "cancel",
    TriggerNextEvent = "trigger_next_event"
}
export declare class ControlRequest extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    cmd: ControlRequestCmdEnum;
    requestId: string;
}
