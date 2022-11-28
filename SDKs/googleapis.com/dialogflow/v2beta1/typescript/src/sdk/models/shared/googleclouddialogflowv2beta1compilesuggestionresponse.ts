import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";



// GoogleCloudDialogflowV2beta1CompileSuggestionResponse
/** 
 * The response message for Participants.CompileSuggestion.
**/
export class GoogleCloudDialogflowV2beta1CompileSuggestionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestion" })
  suggestion?: GoogleCloudDialogflowV2beta1Suggestion;
}
