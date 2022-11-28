import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3DtmfInput } from "./googleclouddialogflowcxv3dtmfinput";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3SentimentAnalysisResult } from "./googleclouddialogflowcxv3sentimentanalysisresult";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Represents the result of a conversational query.
**/
export declare class GoogleCloudDialogflowCxV3QueryResult extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3Page;
    diagnosticInfo?: Map<string, any>;
    dtmf?: GoogleCloudDialogflowCxV3DtmfInput;
    intent?: GoogleCloudDialogflowCxV3Intent;
    intentDetectionConfidence?: number;
    languageCode?: string;
    match?: GoogleCloudDialogflowCxV3Match;
    parameters?: Map<string, any>;
    responseMessages?: GoogleCloudDialogflowCxV3ResponseMessage[];
    sentimentAnalysisResult?: GoogleCloudDialogflowCxV3SentimentAnalysisResult;
    text?: string;
    transcript?: string;
    triggerEvent?: string;
    triggerIntent?: string;
    webhookPayloads?: Map<string, any>[];
    webhookStatuses?: GoogleRpcStatus[];
}
