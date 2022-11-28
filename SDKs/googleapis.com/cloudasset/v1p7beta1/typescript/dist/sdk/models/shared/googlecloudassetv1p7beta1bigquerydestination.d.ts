import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p7beta1PartitionSpec } from "./googlecloudassetv1p7beta1partitionspec";
/**
 * A BigQuery destination for exporting assets to.
**/
export declare class GoogleCloudAssetV1p7beta1BigQueryDestination extends SpeakeasyBase {
    dataset?: string;
    force?: boolean;
    partitionSpec?: GoogleCloudAssetV1p7beta1PartitionSpec;
    separateTablesPerAssetType?: boolean;
    table?: string;
}
