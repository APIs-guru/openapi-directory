import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionSpec } from "./partitionspec";



// BigQueryDestination
/** 
 * A BigQuery destination for exporting assets to.
**/
export class BigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=partitionSpec" })
  partitionSpec?: PartitionSpec;

  @SpeakeasyMetadata({ data: "json, name=separateTablesPerAssetType" })
  separateTablesPerAssetType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
