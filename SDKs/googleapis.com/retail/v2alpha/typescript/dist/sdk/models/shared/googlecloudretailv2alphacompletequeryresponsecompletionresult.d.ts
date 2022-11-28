import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
/**
 * Resource that represents completion results.
**/
export declare class GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;
    suggestion?: string;
}
