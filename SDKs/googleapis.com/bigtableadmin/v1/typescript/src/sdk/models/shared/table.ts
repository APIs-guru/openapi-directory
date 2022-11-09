import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterState } from "./clusterstate";
import { ColumnFamily } from "./columnfamily";
import { RestoreInfo } from "./restoreinfo";

export enum TableGranularityEnum {
    TimestampGranularityUnspecified = "TIMESTAMP_GRANULARITY_UNSPECIFIED"
,    Millis = "MILLIS"
}


// Table
/** 
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterStates", elemType: shared.ClusterState })
  clusterStates?: Map<string, ClusterState>;

  @Metadata({ data: "json, name=columnFamilies", elemType: shared.ColumnFamily })
  columnFamilies?: Map<string, ColumnFamily>;

  @Metadata({ data: "json, name=granularity" })
  granularity?: TableGranularityEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restoreInfo" })
  restoreInfo?: RestoreInfo;
}
