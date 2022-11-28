import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";



// GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult
/** 
 * Resource that represents completion results.
**/
export class GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
