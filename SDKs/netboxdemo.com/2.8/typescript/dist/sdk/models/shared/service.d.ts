import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDevice } from "./nesteddevice";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedVirtualMachine } from "./nestedvirtualmachine";
export declare enum ServiceProtocolLabelEnum {
    Tcp = "TCP",
    Udp = "UDP"
}
export declare enum ServiceProtocolValueEnum {
    Tcp = "tcp",
    Udp = "udp"
}
export declare class ServiceProtocol extends SpeakeasyBase {
    label: ServiceProtocolLabelEnum;
    value: ServiceProtocolValueEnum;
}
export declare class Service extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    device?: NestedDevice;
    id?: number;
    ipaddresses?: NestedIpAddress[];
    lastUpdated?: Date;
    name: string;
    port: number;
    protocol?: ServiceProtocol;
    tags?: string[];
    virtualMachine?: NestedVirtualMachine;
}
