import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuggestionClusterProto } from "./suggestionclusterproto";


// ListStepAccessibilityClustersResponse
/** 
 * Response message for AccessibilityService.ListStepAccessibilityClusters.
**/
export class ListStepAccessibilityClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.SuggestionClusterProto })
  clusters?: SuggestionClusterProto[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
