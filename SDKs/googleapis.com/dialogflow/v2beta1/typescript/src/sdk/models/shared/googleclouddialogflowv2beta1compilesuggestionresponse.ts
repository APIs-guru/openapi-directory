import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";


// GoogleCloudDialogflowV2beta1CompileSuggestionResponse
/** 
 * The response message for Participants.CompileSuggestion.
**/
export class GoogleCloudDialogflowV2beta1CompileSuggestionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;

  @Metadata({ data: "json, name=suggestion" })
  suggestion?: GoogleCloudDialogflowV2beta1Suggestion;
}
