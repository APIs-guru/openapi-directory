import { SpeakeasyBase } from "../../../internal/utils";
import { NestedInterface } from "./nestedinterface";
export declare enum InterfaceConnectionConnectionStatusLabelEnum {
    NotConnected = "Not Connected",
    Connected = "Connected"
}
export declare class InterfaceConnectionConnectionStatus extends SpeakeasyBase {
    label: InterfaceConnectionConnectionStatusLabelEnum;
    value: boolean;
}
export declare class InterfaceConnection extends SpeakeasyBase {
    connectionStatus?: InterfaceConnectionConnectionStatus;
    interfaceA?: NestedInterface;
    interfaceB: NestedInterface;
}
