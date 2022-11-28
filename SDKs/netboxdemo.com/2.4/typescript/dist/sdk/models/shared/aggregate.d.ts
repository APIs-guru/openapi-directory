import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRir } from "./nestedrir";
export declare class Aggregate extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    dateAdded?: Date;
    description?: string;
    family?: number;
    id?: number;
    lastUpdated?: Date;
    prefix: string;
    rir: NestedRir;
    tags?: string[];
}
