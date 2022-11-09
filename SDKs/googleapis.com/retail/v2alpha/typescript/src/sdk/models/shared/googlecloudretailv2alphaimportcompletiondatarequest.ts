import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaCompletionDataInputConfig } from "./googlecloudretailv2alphacompletiondatainputconfig";


// GoogleCloudRetailV2alphaImportCompletionDataRequest
/** 
 * Request message for ImportCompletionData methods.
**/
export class GoogleCloudRetailV2alphaImportCompletionDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2alphaCompletionDataInputConfig;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;
}
