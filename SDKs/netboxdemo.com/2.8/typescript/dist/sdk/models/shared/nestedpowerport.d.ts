import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare enum NestedPowerPortConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}
export declare class NestedPowerPortConnectionStatus extends SpeakeasyBase {
    label: NestedPowerPortConnectionStatusLabelEnum;
    value: boolean;
}
export declare class NestedPowerPort extends SpeakeasyBase {
    cable?: number;
    connectionStatus?: NestedPowerPortConnectionStatus;
    device?: NestedDevice;
    id?: number;
    name: string;
    url?: string;
}
