import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1CompileSuggestionRequest
/** 
 * The request message for Participants.CompileSuggestion.
**/
export class GoogleCloudDialogflowV2beta1CompileSuggestionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @Metadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
