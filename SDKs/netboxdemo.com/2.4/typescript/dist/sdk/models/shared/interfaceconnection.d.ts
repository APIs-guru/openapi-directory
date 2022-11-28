import { SpeakeasyBase } from "../../../internal/utils";
import { NestedInterface } from "./nestedinterface";
export declare class InterfaceConnectionConnectionStatus extends SpeakeasyBase {
    label: string;
    value: boolean;
}
export declare class InterfaceConnection extends SpeakeasyBase {
    connectionStatus?: InterfaceConnectionConnectionStatus;
    id?: number;
    interfaceA: NestedInterface;
    interfaceB: NestedInterface;
}
