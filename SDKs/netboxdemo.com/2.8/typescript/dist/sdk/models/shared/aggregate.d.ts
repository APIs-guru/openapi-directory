import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRir } from "./nestedrir";
export declare enum AggregateFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}
export declare class AggregateFamily extends SpeakeasyBase {
    label: AggregateFamilyLabelEnum;
    value: number;
}
export declare class Aggregate extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    dateAdded?: Date;
    description?: string;
    family?: AggregateFamily;
    id?: number;
    lastUpdated?: Date;
    prefix: string;
    rir: NestedRir;
    tags?: string[];
}
