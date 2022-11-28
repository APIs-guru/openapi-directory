import { SpeakeasyBase } from "../../../internal/utils";
import { Capacity } from "./capacity";
/**
 * The settings for a topic's partitions.
**/
export declare class PartitionConfig extends SpeakeasyBase {
    capacity?: Capacity;
    count?: string;
    scale?: number;
}
