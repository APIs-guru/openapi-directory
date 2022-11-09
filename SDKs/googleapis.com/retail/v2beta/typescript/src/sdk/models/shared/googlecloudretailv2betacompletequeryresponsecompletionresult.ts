import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";


// GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult
/** 
 * Resource that represents completion results.
**/
export class GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @Metadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
