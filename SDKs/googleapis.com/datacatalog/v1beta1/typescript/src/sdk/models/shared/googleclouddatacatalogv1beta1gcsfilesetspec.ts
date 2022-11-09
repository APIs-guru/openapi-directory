import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1GcsFileSpec } from "./googleclouddatacatalogv1beta1gcsfilespec";


// GoogleCloudDatacatalogV1beta1GcsFilesetSpec
/** 
 * Describes a Cloud Storage fileset entry.
**/
export class GoogleCloudDatacatalogV1beta1GcsFilesetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePatterns" })
  filePatterns?: string[];

  @Metadata({ data: "json, name=sampleGcsFileSpecs", elemType: shared.GoogleCloudDatacatalogV1beta1GcsFileSpec })
  sampleGcsFileSpecs?: GoogleCloudDatacatalogV1beta1GcsFileSpec[];
}
