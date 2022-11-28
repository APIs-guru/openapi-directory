import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1DtmfInput } from "./googleclouddialogflowcxv3beta1dtmfinput";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";
import { GoogleCloudDialogflowCxV3beta1ResponseMessage } from "./googleclouddialogflowcxv3beta1responsemessage";
import { GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult } from "./googleclouddialogflowcxv3beta1sentimentanalysisresult";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Represents the result of a conversational query.
**/
export declare class GoogleCloudDialogflowCxV3beta1QueryResult extends SpeakeasyBase {
    currentPage?: GoogleCloudDialogflowCxV3beta1Page;
    diagnosticInfo?: Map<string, any>;
    dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput;
    intent?: GoogleCloudDialogflowCxV3beta1Intent;
    intentDetectionConfidence?: number;
    languageCode?: string;
    match?: GoogleCloudDialogflowCxV3beta1Match;
    parameters?: Map<string, any>;
    responseMessages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult;
    text?: string;
    transcript?: string;
    triggerEvent?: string;
    triggerIntent?: string;
    webhookPayloads?: Map<string, any>[];
    webhookStatuses?: GoogleRpcStatus[];
}
