import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2GcsDestination
/** 
 * The Google Cloud Storage location where the output file will be written to.
**/
export class GoogleCloudDocumentaiV1beta2GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
