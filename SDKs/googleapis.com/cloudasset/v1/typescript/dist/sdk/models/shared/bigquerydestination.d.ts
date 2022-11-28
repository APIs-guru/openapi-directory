import { SpeakeasyBase } from "../../../internal/utils";
import { PartitionSpec } from "./partitionspec";
/**
 * A BigQuery destination for exporting assets to.
**/
export declare class BigQueryDestination extends SpeakeasyBase {
    dataset?: string;
    force?: boolean;
    partitionSpec?: PartitionSpec;
    separateTablesPerAssetType?: boolean;
    table?: string;
}
