import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination
/** 
 * BigQuery destination.
**/
export class GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
