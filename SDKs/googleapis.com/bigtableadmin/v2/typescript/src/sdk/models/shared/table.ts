import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterState } from "./clusterstate";
import { ColumnFamily } from "./columnfamily";
import { RestoreInfo1 } from "./restoreinfo1";
import { TableStats } from "./tablestats";
import { RestoreInfo } from "./restoreinfo";


export enum TableGranularityEnum {
    TimestampGranularityUnspecified = "TIMESTAMP_GRANULARITY_UNSPECIFIED",
    Millis = "MILLIS"
}


// Table
/** 
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
**/
export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterStates", elemType: ClusterState })
  clusterStates?: Map<string, ClusterState>;

  @SpeakeasyMetadata({ data: "json, name=columnFamilies", elemType: ColumnFamily })
  columnFamilies?: Map<string, ColumnFamily>;

  @SpeakeasyMetadata({ data: "json, name=deletionProtection" })
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=granularity" })
  granularity?: TableGranularityEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restoreInfo" })
  restoreInfo?: RestoreInfo1;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: TableStats;
}


// TableInput
/** 
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
**/
export class TableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnFamilies", elemType: ColumnFamily })
  columnFamilies?: Map<string, ColumnFamily>;

  @SpeakeasyMetadata({ data: "json, name=deletionProtection" })
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=granularity" })
  granularity?: TableGranularityEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restoreInfo" })
  restoreInfo?: RestoreInfo;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: TableStats;
}
