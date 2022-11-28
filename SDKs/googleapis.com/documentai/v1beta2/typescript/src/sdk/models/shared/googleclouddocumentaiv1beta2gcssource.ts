import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2GcsSource
/** 
 * The Google Cloud Storage location where the input file will be read from.
**/
export class GoogleCloudDocumentaiV1beta2GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
