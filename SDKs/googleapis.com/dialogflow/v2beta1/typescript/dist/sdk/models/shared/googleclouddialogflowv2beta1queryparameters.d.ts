import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig } from "./googleclouddialogflowv2beta1sentimentanalysisrequestconfig";
import { GoogleCloudDialogflowV2beta1SessionEntityType } from "./googleclouddialogflowv2beta1sessionentitytype";
import { GoogleCloudDialogflowV2beta1SubAgent } from "./googleclouddialogflowv2beta1subagent";
/**
 * Represents the parameters of the conversational query.
**/
export declare class GoogleCloudDialogflowV2beta1QueryParameters extends SpeakeasyBase {
    contexts?: GoogleCloudDialogflowV2beta1Context[];
    geoLocation?: GoogleTypeLatLng;
    knowledgeBaseNames?: string[];
    payload?: Map<string, any>;
    resetContexts?: boolean;
    sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;
    sessionEntityTypes?: GoogleCloudDialogflowV2beta1SessionEntityType[];
    subAgents?: GoogleCloudDialogflowV2beta1SubAgent[];
    timeZone?: string;
    webhookHeaders?: Map<string, string>;
}
