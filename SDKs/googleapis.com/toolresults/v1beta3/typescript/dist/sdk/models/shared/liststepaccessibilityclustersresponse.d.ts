import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestionClusterProto } from "./suggestionclusterproto";
/**
 * Response message for AccessibilityService.ListStepAccessibilityClusters.
**/
export declare class ListStepAccessibilityClustersResponse extends SpeakeasyBase {
    clusters?: SuggestionClusterProto[];
    name?: string;
}
