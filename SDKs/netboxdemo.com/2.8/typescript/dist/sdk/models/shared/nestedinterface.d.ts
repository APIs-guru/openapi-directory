import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
export declare enum NestedInterfaceConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}
export declare class NestedInterfaceConnectionStatus extends SpeakeasyBase {
    label: NestedInterfaceConnectionStatusLabelEnum;
    value: boolean;
}
export declare class NestedInterface extends SpeakeasyBase {
    cable?: number;
    connectionStatus?: NestedInterfaceConnectionStatus;
    device?: NestedDevice;
    id?: number;
    name: string;
    url?: string;
}
