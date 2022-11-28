import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";



// GoogleCloudRetailV2CompleteQueryResponseCompletionResult
/** 
 * Resource that represents completion results.
**/
export class GoogleCloudRetailV2CompleteQueryResponseCompletionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
