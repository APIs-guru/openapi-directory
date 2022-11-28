import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCompletionDataInputConfig } from "./googlecloudretailv2alphacompletiondatainputconfig";
/**
 * Request message for ImportCompletionData methods.
**/
export declare class GoogleCloudRetailV2alphaImportCompletionDataRequest extends SpeakeasyBase {
    inputConfig?: GoogleCloudRetailV2alphaCompletionDataInputConfig;
    notificationPubsubTopic?: string;
}
