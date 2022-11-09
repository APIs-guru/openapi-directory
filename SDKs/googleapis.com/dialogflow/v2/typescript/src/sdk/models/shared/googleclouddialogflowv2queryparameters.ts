import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowV2SentimentAnalysisRequestConfig } from "./googleclouddialogflowv2sentimentanalysisrequestconfig";
import { GoogleCloudDialogflowV2SessionEntityType } from "./googleclouddialogflowv2sessionentitytype";


// GoogleCloudDialogflowV2QueryParameters
/** 
 * Represents the parameters of the conversational query.
**/
export class GoogleCloudDialogflowV2QueryParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts", elemType: shared.GoogleCloudDialogflowV2Context })
  contexts?: GoogleCloudDialogflowV2Context[];

  @Metadata({ data: "json, name=geoLocation" })
  geoLocation?: GoogleTypeLatLng;

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @Metadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @Metadata({ data: "json, name=sentimentAnalysisRequestConfig" })
  sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;

  @Metadata({ data: "json, name=sessionEntityTypes", elemType: shared.GoogleCloudDialogflowV2SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowV2SessionEntityType[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=webhookHeaders" })
  webhookHeaders?: Map<string, string>;
}
