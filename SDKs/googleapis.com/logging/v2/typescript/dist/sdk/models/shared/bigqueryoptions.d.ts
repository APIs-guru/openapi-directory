import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options that change functionality of a sink exporting data to BigQuery.
**/
export declare class BigQueryOptionsInput extends SpeakeasyBase {
    usePartitionedTables?: boolean;
}
/**
 * Options that change functionality of a sink exporting data to BigQuery.
**/
export declare class BigQueryOptions extends SpeakeasyBase {
    usePartitionedTables?: boolean;
    usesTimestampColumnPartitioning?: boolean;
}
