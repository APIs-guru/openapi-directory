import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";


// GoogleCloudDatacatalogV1beta1GcsFileSpec
/** 
 * Specifications of a single file in Cloud Storage.
**/
export class GoogleCloudDatacatalogV1beta1GcsFileSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath?: string;

  @Metadata({ data: "json, name=gcsTimestamps" })
  gcsTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
