import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1GcsDestination
/** 
 * The Google Cloud Storage location where the output will be written to.
**/
export class GoogleCloudVisionV1p1beta1GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
