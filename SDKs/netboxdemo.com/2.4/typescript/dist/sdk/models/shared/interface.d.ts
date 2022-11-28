import { SpeakeasyBase } from "../../../internal/utils";
import { InterfaceCircuitTermination } from "./interfacecircuittermination";
import { NestedDevice } from "./nesteddevice";
import { NestedInterface } from "./nestedinterface";
import { InterfaceVlan } from "./interfacevlan";
export declare class InterfaceFormFactor extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class InterfaceMode extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Interface extends SpeakeasyBase {
    circuitTermination?: InterfaceCircuitTermination;
    description?: string;
    device: NestedDevice;
    enabled?: boolean;
    formFactor?: InterfaceFormFactor;
    id?: number;
    interfaceConnection?: string;
    isConnected?: string;
    lag?: NestedInterface;
    macAddress?: string;
    mgmtOnly?: boolean;
    mode?: InterfaceMode;
    mtu?: number;
    name: string;
    taggedVlans?: InterfaceVlan[];
    tags?: string[];
    untaggedVlan?: InterfaceVlan;
}
