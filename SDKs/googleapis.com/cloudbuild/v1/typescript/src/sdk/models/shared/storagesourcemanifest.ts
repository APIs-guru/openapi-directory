import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StorageSourceManifest
/** 
 * Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
**/
export class StorageSourceManifest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
