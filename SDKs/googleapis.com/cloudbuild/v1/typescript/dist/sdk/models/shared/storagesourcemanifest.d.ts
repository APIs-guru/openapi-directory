import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
**/
export declare class StorageSourceManifest extends SpeakeasyBase {
    bucket?: string;
    generation?: string;
    object?: string;
}
