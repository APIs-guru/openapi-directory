import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableInterfaceInput extends SpeakeasyBase {
    circuitTermination: number;
    description?: string;
    device: number;
    enabled?: boolean;
    formFactor?: number;
    lag?: number;
    macAddress?: string;
    mgmtOnly?: boolean;
    mode?: number;
    mtu?: number;
    name: string;
    taggedVlans?: number[];
    tags?: string[];
    untaggedVlan?: number;
}
