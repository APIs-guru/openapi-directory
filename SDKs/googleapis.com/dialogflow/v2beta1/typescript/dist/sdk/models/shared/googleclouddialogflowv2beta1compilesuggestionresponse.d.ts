import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";
/**
 * The response message for Participants.CompileSuggestion.
**/
export declare class GoogleCloudDialogflowV2beta1CompileSuggestionResponse extends SpeakeasyBase {
    contextSize?: number;
    latestMessage?: string;
    suggestion?: GoogleCloudDialogflowV2beta1Suggestion;
}
