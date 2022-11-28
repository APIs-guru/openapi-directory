import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterState } from "./clusterstate";
import { ColumnFamily } from "./columnfamily";
import { RestoreInfo } from "./restoreinfo";
import { RestoreInfo1 } from "./restoreinfo1";
export declare enum TableGranularityEnum {
    TimestampGranularityUnspecified = "TIMESTAMP_GRANULARITY_UNSPECIFIED",
    Millis = "MILLIS"
}
/**
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
**/
export declare class Table extends SpeakeasyBase {
    clusterStates?: Map<string, ClusterState>;
    columnFamilies?: Map<string, ColumnFamily>;
    granularity?: TableGranularityEnum;
    name?: string;
    restoreInfo?: RestoreInfo;
}
/**
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
**/
export declare class TableInput extends SpeakeasyBase {
    columnFamilies?: Map<string, ColumnFamily>;
    granularity?: TableGranularityEnum;
    name?: string;
    restoreInfo?: RestoreInfo1;
}
