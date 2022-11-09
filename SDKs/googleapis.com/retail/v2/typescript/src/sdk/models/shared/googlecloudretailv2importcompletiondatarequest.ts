import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2CompletionDataInputConfig } from "./googlecloudretailv2completiondatainputconfig";


// GoogleCloudRetailV2ImportCompletionDataRequest
/** 
 * Request message for ImportCompletionData methods.
**/
export class GoogleCloudRetailV2ImportCompletionDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2CompletionDataInputConfig;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;
}
