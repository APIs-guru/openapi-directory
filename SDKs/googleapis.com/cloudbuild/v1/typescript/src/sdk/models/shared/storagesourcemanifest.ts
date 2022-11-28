import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StorageSourceManifest
/** 
 * Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
**/
export class StorageSourceManifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
