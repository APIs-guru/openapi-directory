import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: GoogleCloudDialogflowV2beta1Context })
  contexts?: GoogleCloudDialogflowV2beta1Context[];

  @SpeakeasyMetadata({ data: "json, name=geoLocation" })
  geoLocation?: GoogleTypeLatLng;

  @SpeakeasyMetadata({ data: "json, name=knowledgeBaseNames" })
  knowledgeBaseNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisRequestConfig" })
  sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowV2beta1SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowV2beta1SessionEntityType[];

  @SpeakeasyMetadata({ data: "json, name=subAgents", elemType: GoogleCloudDialogflowV2beta1SubAgent })
  subAgents?: GoogleCloudDialogflowV2beta1SubAgent[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookHeaders" })
  webhookHeaders?: Map<string, string>;
}
