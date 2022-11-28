import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1GcsFileSpec } from "./googleclouddatacatalogv1gcsfilespec";



// GoogleCloudDatacatalogV1GcsFilesetSpecInput
/** 
 * Describes a Cloud Storage fileset entry.
**/
export class GoogleCloudDatacatalogV1GcsFilesetSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePatterns" })
  filePatterns?: string[];
}


// GoogleCloudDatacatalogV1GcsFilesetSpec
/** 
 * Describes a Cloud Storage fileset entry.
**/
export class GoogleCloudDatacatalogV1GcsFilesetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePatterns" })
  filePatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=sampleGcsFileSpecs", elemType: GoogleCloudDatacatalogV1GcsFileSpec })
  sampleGcsFileSpecs?: GoogleCloudDatacatalogV1GcsFileSpec[];
}
