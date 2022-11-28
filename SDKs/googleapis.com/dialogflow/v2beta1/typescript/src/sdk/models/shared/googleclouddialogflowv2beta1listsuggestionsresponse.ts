import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";



// GoogleCloudDialogflowV2beta1ListSuggestionsResponse
/** 
 * The response message for Participants.ListSuggestions.
**/
export class GoogleCloudDialogflowV2beta1ListSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestions", elemType: GoogleCloudDialogflowV2beta1Suggestion })
  suggestions?: GoogleCloudDialogflowV2beta1Suggestion[];
}
