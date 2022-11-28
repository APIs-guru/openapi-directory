import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AssistQueryParameters } from "./googleclouddialogflowv2assistqueryparameters";
/**
 * The request message for Participants.SuggestArticles.
**/
export declare class GoogleCloudDialogflowV2SuggestArticlesRequest extends SpeakeasyBase {
    assistQueryParams?: GoogleCloudDialogflowV2AssistQueryParameters;
    contextSize?: number;
    latestMessage?: string;
}
