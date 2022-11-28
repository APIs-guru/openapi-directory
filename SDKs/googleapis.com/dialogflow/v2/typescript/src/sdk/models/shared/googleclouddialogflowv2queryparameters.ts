import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowV2SentimentAnalysisRequestConfig } from "./googleclouddialogflowv2sentimentanalysisrequestconfig";
import { GoogleCloudDialogflowV2SessionEntityType } from "./googleclouddialogflowv2sessionentitytype";



// GoogleCloudDialogflowV2QueryParameters
/** 
 * Represents the parameters of the conversational query.
**/
export class GoogleCloudDialogflowV2QueryParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: GoogleCloudDialogflowV2Context })
  contexts?: GoogleCloudDialogflowV2Context[];

  @SpeakeasyMetadata({ data: "json, name=geoLocation" })
  geoLocation?: GoogleTypeLatLng;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resetContexts" })
  resetContexts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisRequestConfig" })
  sentimentAnalysisRequestConfig?: GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowV2SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowV2SessionEntityType[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookHeaders" })
  webhookHeaders?: Map<string, string>;
}
