import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig } from "./googleclouddialogflowv2beta1sentimentanalysisrequestconfig";
import { GoogleCloudDialogflowV2beta1SessionEntityType } from "./googleclouddialogflowv2beta1sessionentitytype";
import { GoogleCloudDialogflowV2beta1SubAgent } from "./googleclouddialogflowv2beta1subagent";


// GoogleCloudDialogflowV2beta1QueryParameters
/** 
 * Represents the parameters of the conversational query.
**/
export class GoogleCloudDialogflowV2beta1QueryParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts", elemType: shared.GoogleCloudDialogflowV2beta1Context })
  contexts?: GoogleCloudDialogflowV2beta1Context[];

  @Metadata({ data: "json, name=geoLocation" })
  geoLocation?: GoogleTypeLatLng;

  @Metadata({ data: "json, name=knowledgeBaseNames" })
  knowledgeBaseNames?: string[];

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @Metadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @Metadata({ data: "json, name=sentimentAnalysisRequestConfig" })
  sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;

  @Metadata({ data: "json, name=sessionEntityTypes", elemType: shared.GoogleCloudDialogflowV2beta1SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowV2beta1SessionEntityType[];

  @Metadata({ data: "json, name=subAgents", elemType: shared.GoogleCloudDialogflowV2beta1SubAgent })
  subAgents?: GoogleCloudDialogflowV2beta1SubAgent[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=webhookHeaders" })
  webhookHeaders?: Map<string, string>;
}
