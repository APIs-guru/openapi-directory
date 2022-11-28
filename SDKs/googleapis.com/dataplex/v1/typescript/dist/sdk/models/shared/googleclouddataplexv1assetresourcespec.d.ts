import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1AssetResourceSpecTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    StorageBucket = "STORAGE_BUCKET",
    BigqueryDataset = "BIGQUERY_DATASET"
}
/**
 * Identifies the cloud resource that is referenced by this asset.
**/
export declare class GoogleCloudDataplexV1AssetResourceSpec extends SpeakeasyBase {
    name?: string;
    type?: GoogleCloudDataplexV1AssetResourceSpecTypeEnum;
}
