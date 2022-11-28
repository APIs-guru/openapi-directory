import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableServiceInput extends SpeakeasyBase {
    customFields?: Map<string, any>;
    description?: string;
    device?: number;
    ipaddresses?: number[];
    name: string;
    port: number;
    protocol: number;
    virtualMachine?: number;
}
