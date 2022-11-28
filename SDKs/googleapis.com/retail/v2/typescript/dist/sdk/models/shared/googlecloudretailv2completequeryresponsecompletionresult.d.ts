import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
/**
 * Resource that represents completion results.
**/
export declare class GoogleCloudRetailV2CompleteQueryResponseCompletionResult extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;
    suggestion?: string;
}
