import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
/**
 * Specifications of a single file in Cloud Storage.
**/
export declare class GoogleCloudDatacatalogV1beta1GcsFileSpec extends SpeakeasyBase {
    filePath?: string;
    gcsTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
    sizeBytes?: string;
}
