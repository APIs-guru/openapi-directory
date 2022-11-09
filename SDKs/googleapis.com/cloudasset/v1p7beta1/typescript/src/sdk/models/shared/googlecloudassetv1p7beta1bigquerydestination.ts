import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssetV1p7beta1PartitionSpec } from "./googlecloudassetv1p7beta1partitionspec";


// GoogleCloudAssetV1p7beta1BigQueryDestination
/** 
 * A BigQuery destination for exporting assets to.
**/
export class GoogleCloudAssetV1p7beta1BigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=partitionSpec" })
  partitionSpec?: GoogleCloudAssetV1p7beta1PartitionSpec;

  @Metadata({ data: "json, name=separateTablesPerAssetType" })
  separateTablesPerAssetType?: boolean;

  @Metadata({ data: "json, name=table" })
  table?: string;
}
