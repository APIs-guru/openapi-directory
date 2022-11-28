import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuggestionClusterProto } from "./suggestionclusterproto";



// ListStepAccessibilityClustersResponse
/** 
 * Response message for AccessibilityService.ListStepAccessibilityClusters.
**/
export class ListStepAccessibilityClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: SuggestionClusterProto })
  clusters?: SuggestionClusterProto[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
