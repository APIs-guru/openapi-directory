import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2GcsDestination
/** 
 * Google Cloud Storage location for the output.
**/
export class GoogleCloudDialogflowV2GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
