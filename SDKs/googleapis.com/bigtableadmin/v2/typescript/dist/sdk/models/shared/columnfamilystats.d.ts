import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.
**/
export declare class ColumnFamilyStats extends SpeakeasyBase {
    averageCellsPerColumn?: number;
    averageColumnsPerRow?: number;
    logicalDataBytes?: string;
}
