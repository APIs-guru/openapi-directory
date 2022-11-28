import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CompletionDataInputConfig } from "./googlecloudretailv2completiondatainputconfig";
/**
 * Request message for ImportCompletionData methods.
**/
export declare class GoogleCloudRetailV2ImportCompletionDataRequest extends SpeakeasyBase {
    inputConfig?: GoogleCloudRetailV2CompletionDataInputConfig;
    notificationPubsubTopic?: string;
}
