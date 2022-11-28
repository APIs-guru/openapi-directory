import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p7beta1PartitionSpec } from "./googlecloudassetv1p7beta1partitionspec";



// GoogleCloudAssetV1p7beta1BigQueryDestination
/** 
 * A BigQuery destination for exporting assets to.
**/
export class GoogleCloudAssetV1p7beta1BigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=partitionSpec" })
  partitionSpec?: GoogleCloudAssetV1p7beta1PartitionSpec;

  @SpeakeasyMetadata({ data: "json, name=separateTablesPerAssetType" })
  separateTablesPerAssetType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
