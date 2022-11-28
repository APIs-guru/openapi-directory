import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1GcsFileSpec } from "./googleclouddatacatalogv1beta1gcsfilespec";
/**
 * Describes a Cloud Storage fileset entry.
**/
export declare class GoogleCloudDatacatalogV1beta1GcsFilesetSpec extends SpeakeasyBase {
    filePatterns?: string[];
    sampleGcsFileSpecs?: GoogleCloudDatacatalogV1beta1GcsFileSpec[];
}
/**
 * Describes a Cloud Storage fileset entry.
**/
export declare class GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput extends SpeakeasyBase {
    filePatterns?: string[];
}
