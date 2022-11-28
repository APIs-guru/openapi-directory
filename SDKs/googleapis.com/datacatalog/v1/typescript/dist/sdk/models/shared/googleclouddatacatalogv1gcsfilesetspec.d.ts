import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1GcsFileSpec } from "./googleclouddatacatalogv1gcsfilespec";
/**
 * Describes a Cloud Storage fileset entry.
**/
export declare class GoogleCloudDatacatalogV1GcsFilesetSpecInput extends SpeakeasyBase {
    filePatterns?: string[];
}
/**
 * Describes a Cloud Storage fileset entry.
**/
export declare class GoogleCloudDatacatalogV1GcsFilesetSpec extends SpeakeasyBase {
    filePatterns?: string[];
    sampleGcsFileSpecs?: GoogleCloudDatacatalogV1GcsFileSpec[];
}
