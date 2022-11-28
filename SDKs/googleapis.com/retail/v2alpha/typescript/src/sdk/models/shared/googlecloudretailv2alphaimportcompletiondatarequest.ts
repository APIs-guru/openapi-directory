import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCompletionDataInputConfig } from "./googlecloudretailv2alphacompletiondatainputconfig";



// GoogleCloudRetailV2alphaImportCompletionDataRequest
/** 
 * Request message for ImportCompletionData methods.
**/
export class GoogleCloudRetailV2alphaImportCompletionDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2alphaCompletionDataInputConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;
}
