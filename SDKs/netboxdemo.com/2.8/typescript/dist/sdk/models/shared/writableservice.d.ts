import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableServiceProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
export declare class WritableServiceInput extends SpeakeasyBase {
    customFields?: Map<string, any>;
    description?: string;
    device?: number;
    ipaddresses?: number[];
    name: string;
    port: number;
    protocol: WritableServiceProtocolEnum;
    tags?: string[];
    virtualMachine?: number;
}
