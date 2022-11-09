import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PartitionSpec } from "./partitionspec";


// BigQueryDestination
/** 
 * A BigQuery destination for exporting assets to.
**/
export class BigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=partitionSpec" })
  partitionSpec?: PartitionSpec;

  @Metadata({ data: "json, name=separateTablesPerAssetType" })
  separateTablesPerAssetType?: boolean;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
