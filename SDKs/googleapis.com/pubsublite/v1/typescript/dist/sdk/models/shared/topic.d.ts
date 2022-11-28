import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionConfig } from "./partitionconfig";
import { ReservationConfig } from "./reservationconfig";
import { RetentionConfig } from "./retentionconfig";
/**
 * Metadata about a topic resource.
**/
export declare class Topic extends SpeakeasyBase {
    name?: string;
    partitionConfig?: PartitionConfig;
    reservationConfig?: ReservationConfig;
    retentionConfig?: RetentionConfig;
}
