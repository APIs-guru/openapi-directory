import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CompletionDataInputConfig } from "./googlecloudretailv2completiondatainputconfig";



// GoogleCloudRetailV2ImportCompletionDataRequest
/** 
 * Request message for ImportCompletionData methods.
**/
export class GoogleCloudRetailV2ImportCompletionDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2CompletionDataInputConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;
}
