import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1GcsFileSpec } from "./googleclouddatacatalogv1beta1gcsfilespec";



// GoogleCloudDatacatalogV1beta1GcsFilesetSpec
/** 
 * Describes a Cloud Storage fileset entry.
**/
export class GoogleCloudDatacatalogV1beta1GcsFilesetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePatterns" })
  filePatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=sampleGcsFileSpecs", elemType: GoogleCloudDatacatalogV1beta1GcsFileSpec })
  sampleGcsFileSpecs?: GoogleCloudDatacatalogV1beta1GcsFileSpec[];
}


// GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput
/** 
 * Describes a Cloud Storage fileset entry.
**/
export class GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePatterns" })
  filePatterns?: string[];
}
