import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";


// GoogleCloudRetailV2CompleteQueryResponseCompletionResult
/** 
 * Resource that represents completion results.
**/
export class GoogleCloudRetailV2CompleteQueryResponseCompletionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @Metadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
