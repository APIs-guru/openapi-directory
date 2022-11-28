import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
/**
 * Specification of a single file in Cloud Storage.
**/
export declare class GoogleCloudDatacatalogV1GcsFileSpec extends SpeakeasyBase {
    filePath?: string;
    gcsTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
    sizeBytes?: string;
}
