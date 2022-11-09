import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2GcsSource
/** 
 * The Google Cloud Storage location where the input file will be read from.
**/
export class GoogleCloudDocumentaiV1beta2GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
