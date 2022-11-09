import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1GcsFileSpec } from "./googleclouddatacatalogv1gcsfilespec";


// GoogleCloudDatacatalogV1GcsFilesetSpec
/** 
 * Describes a Cloud Storage fileset entry.
**/
export class GoogleCloudDatacatalogV1GcsFilesetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePatterns" })
  filePatterns?: string[];

  @Metadata({ data: "json, name=sampleGcsFileSpecs", elemType: shared.GoogleCloudDatacatalogV1GcsFileSpec })
  sampleGcsFileSpecs?: GoogleCloudDatacatalogV1GcsFileSpec[];
}
