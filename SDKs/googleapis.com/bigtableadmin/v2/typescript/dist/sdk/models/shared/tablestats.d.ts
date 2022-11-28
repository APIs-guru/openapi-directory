import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.
**/
export declare class TableStats extends SpeakeasyBase {
    averageCellsPerColumn?: number;
    averageColumnsPerRow?: number;
    logicalDataBytes?: string;
    rowCount?: string;
}
