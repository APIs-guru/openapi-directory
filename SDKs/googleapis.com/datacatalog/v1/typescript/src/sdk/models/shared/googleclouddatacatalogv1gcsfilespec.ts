import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";



// GoogleCloudDatacatalogV1GcsFileSpec
/** 
 * Specification of a single file in Cloud Storage.
**/
export class GoogleCloudDatacatalogV1GcsFileSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsTimestamps" })
  gcsTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
