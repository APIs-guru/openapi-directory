import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2GcsSources } from "./googleclouddialogflowv2gcssources";



// GoogleCloudDialogflowV2InputConfig
/** 
 * Represents the configuration of importing a set of conversation files in Google Cloud Storage.
**/
export class GoogleCloudDialogflowV2InputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDialogflowV2GcsSources;
}
