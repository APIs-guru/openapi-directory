import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableAggregateInput extends SpeakeasyBase {
    customFields?: Map<string, any>;
    dateAdded?: Date;
    description?: string;
    prefix: string;
    rir: number;
    tags?: string[];
}
