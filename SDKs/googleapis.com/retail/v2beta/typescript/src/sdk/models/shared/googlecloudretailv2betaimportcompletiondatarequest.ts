import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCompletionDataInputConfig } from "./googlecloudretailv2betacompletiondatainputconfig";



// GoogleCloudRetailV2betaImportCompletionDataRequest
/** 
 * Request message for ImportCompletionData methods.
**/
export class GoogleCloudRetailV2betaImportCompletionDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;
}
