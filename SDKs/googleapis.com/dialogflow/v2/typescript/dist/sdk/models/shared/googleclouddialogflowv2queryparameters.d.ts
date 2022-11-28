import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowV2SentimentAnalysisRequestConfig } from "./googleclouddialogflowv2sentimentanalysisrequestconfig";
import { GoogleCloudDialogflowV2SessionEntityType } from "./googleclouddialogflowv2sessionentitytype";
/**
 * Represents the parameters of the conversational query.
**/
export declare class GoogleCloudDialogflowV2QueryParameters extends SpeakeasyBase {
    contexts?: GoogleCloudDialogflowV2Context[];
    geoLocation?: GoogleTypeLatLng;
    payload?: Map<string, any>;
    resetContexts?: boolean;
    sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
    sessionEntityTypes?: GoogleCloudDialogflowV2SessionEntityType[];
    timeZone?: string;
    webhookHeaders?: Map<string, string>;
}
