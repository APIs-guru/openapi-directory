import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
/**
 * Resource that represents completion results.
**/
export declare class GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;
    suggestion?: string;
}
