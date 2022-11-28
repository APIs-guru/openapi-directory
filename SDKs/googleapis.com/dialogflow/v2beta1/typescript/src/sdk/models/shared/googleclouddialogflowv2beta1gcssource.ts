import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1GcsSource
/** 
 * Google Cloud Storage location for single input.
**/
export class GoogleCloudDialogflowV2beta1GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
