import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaCompletionInfo
/** 
 * Detailed completion information including completion attribution token and clicked completion info.
**/
export class GoogleCloudDiscoveryengineV1alphaCompletionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedPosition" })
  selectedPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=selectedSuggestion" })
  selectedSuggestion?: string;
}
