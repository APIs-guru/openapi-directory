import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";



// GoogleCloudDatacatalogV1beta1GcsFileSpec
/** 
 * Specifications of a single file in Cloud Storage.
**/
export class GoogleCloudDatacatalogV1beta1GcsFileSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsTimestamps" })
  gcsTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
