import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1betaCompletionInfo
/** 
 * Detailed completion information including completion attribution token and clicked completion info.
**/
export class GoogleCloudDiscoveryengineV1betaCompletionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedPosition" })
  selectedPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=selectedSuggestion" })
  selectedSuggestion?: string;
}
