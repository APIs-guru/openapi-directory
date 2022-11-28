import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";
/**
 * The response message for Participants.ListSuggestions.
**/
export declare class GoogleCloudDialogflowV2beta1ListSuggestionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    suggestions?: GoogleCloudDialogflowV2beta1Suggestion[];
}
