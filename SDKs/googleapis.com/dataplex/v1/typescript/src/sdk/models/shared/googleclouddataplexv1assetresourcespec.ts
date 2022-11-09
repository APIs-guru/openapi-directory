import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1AssetResourceSpecTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    StorageBucket = "STORAGE_BUCKET"
,    BigqueryDataset = "BIGQUERY_DATASET"
}


// GoogleCloudDataplexV1AssetResourceSpec
/** 
 * Identifies the cloud resource that is referenced by this asset.
**/
export class GoogleCloudDataplexV1AssetResourceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1AssetResourceSpecTypeEnum;
}
