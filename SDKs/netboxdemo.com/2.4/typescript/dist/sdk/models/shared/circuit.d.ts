import { SpeakeasyBase } from "../../../internal/utils";
import { NestedProvider } from "./nestedprovider";
import { NestedTenant } from "./nestedtenant";
import { NestedCircuitType } from "./nestedcircuittype";
export declare class CircuitStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Circuit extends SpeakeasyBase {
    cid: string;
    comments?: string;
    commitRate?: number;
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    id?: number;
    installDate?: Date;
    lastUpdated?: Date;
    provider: NestedProvider;
    status?: CircuitStatus;
    tags?: string[];
    tenant?: NestedTenant;
    type: NestedCircuitType;
}
