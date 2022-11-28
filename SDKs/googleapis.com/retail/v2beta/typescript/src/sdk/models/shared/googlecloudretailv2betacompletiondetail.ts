import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaCompletionDetail
/** 
 * Detailed completion information including completion attribution token and clicked completion info.
**/
export class GoogleCloudRetailV2betaCompletionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionAttributionToken" })
  completionAttributionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=selectedPosition" })
  selectedPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=selectedSuggestion" })
  selectedSuggestion?: string;
}
