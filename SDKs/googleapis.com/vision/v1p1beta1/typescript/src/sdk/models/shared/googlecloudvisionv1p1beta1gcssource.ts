import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1GcsSource
/** 
 * The Google Cloud Storage location where the input will be read from.
**/
export class GoogleCloudVisionV1p1beta1GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
