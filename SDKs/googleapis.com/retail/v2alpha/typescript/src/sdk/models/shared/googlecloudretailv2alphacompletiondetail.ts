import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaCompletionDetail
/** 
 * Detailed completion information including completion attribution token and clicked completion info.
**/
export class GoogleCloudRetailV2alphaCompletionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionAttributionToken" })
  completionAttributionToken?: string;

  @Metadata({ data: "json, name=selectedPosition" })
  selectedPosition?: number;

  @Metadata({ data: "json, name=selectedSuggestion" })
  selectedSuggestion?: string;
}
