import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2GcsSources
/** 
 * Google Cloud Storage location for the inputs.
**/
export class GoogleCloudDialogflowV2GcsSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}
