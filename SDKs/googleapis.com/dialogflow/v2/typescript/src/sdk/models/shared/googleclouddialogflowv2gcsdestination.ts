import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2GcsDestination
/** 
 * Google Cloud Storage location for the output.
**/
export class GoogleCloudDialogflowV2GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
