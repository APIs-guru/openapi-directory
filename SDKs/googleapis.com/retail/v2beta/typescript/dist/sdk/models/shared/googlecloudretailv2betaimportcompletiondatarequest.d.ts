import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCompletionDataInputConfig } from "./googlecloudretailv2betacompletiondatainputconfig";
/**
 * Request message for ImportCompletionData methods.
**/
export declare class GoogleCloudRetailV2betaImportCompletionDataRequest extends SpeakeasyBase {
    inputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;
    notificationPubsubTopic?: string;
}
