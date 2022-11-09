import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2CompletionDetail
/** 
 * Detailed completion information including completion attribution token and clicked completion info.
**/
export class GoogleCloudRetailV2CompletionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionAttributionToken" })
  completionAttributionToken?: string;

  @Metadata({ data: "json, name=selectedPosition" })
  selectedPosition?: number;

  @Metadata({ data: "json, name=selectedSuggestion" })
  selectedSuggestion?: string;
}
