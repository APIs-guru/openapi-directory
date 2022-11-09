import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";


// GoogleCloudDatacatalogV1GcsFileSpec
/** 
 * Specification of a single file in Cloud Storage.
**/
export class GoogleCloudDatacatalogV1GcsFileSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath?: string;

  @Metadata({ data: "json, name=gcsTimestamps" })
  gcsTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
