import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaCompletionDataInputConfig } from "./googlecloudretailv2betacompletiondatainputconfig";


// GoogleCloudRetailV2betaImportCompletionDataRequest
/** 
 * Request message for ImportCompletionData methods.
**/
export class GoogleCloudRetailV2betaImportCompletionDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;
}
