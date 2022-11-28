import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1CompileSuggestionRequest
/** 
 * The request message for Participants.CompileSuggestion.
**/
export class GoogleCloudDialogflowV2beta1CompileSuggestionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextSize" })
  contextSize?: number;

  @SpeakeasyMetadata({ data: "json, name=latestMessage" })
  latestMessage?: string;
}
