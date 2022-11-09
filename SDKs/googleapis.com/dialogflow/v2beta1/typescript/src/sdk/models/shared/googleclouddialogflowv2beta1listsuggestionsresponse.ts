import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";


// GoogleCloudDialogflowV2beta1ListSuggestionsResponse
/** 
 * The response message for Participants.ListSuggestions.
**/
export class GoogleCloudDialogflowV2beta1ListSuggestionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=suggestions", elemType: shared.GoogleCloudDialogflowV2beta1Suggestion })
  suggestions?: GoogleCloudDialogflowV2beta1Suggestion[];
}
