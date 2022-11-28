import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";



// GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult
/** 
 * Resource that represents completion results.
**/
export class GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: string;
}
