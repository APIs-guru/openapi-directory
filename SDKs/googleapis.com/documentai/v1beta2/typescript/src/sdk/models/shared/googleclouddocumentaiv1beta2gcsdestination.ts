import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2GcsDestination
/** 
 * The Google Cloud Storage location where the output file will be written to.
**/
export class GoogleCloudDocumentaiV1beta2GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
