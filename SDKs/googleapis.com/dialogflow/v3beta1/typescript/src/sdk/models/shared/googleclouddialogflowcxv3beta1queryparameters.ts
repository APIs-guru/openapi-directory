import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowCxV3beta1SessionEntityType } from "./googleclouddialogflowcxv3beta1sessionentitytype";



// GoogleCloudDialogflowCxV3beta1QueryParameters
/** 
 * Represents the parameters of a conversational query.
**/
export class GoogleCloudDialogflowCxV3beta1QueryParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzeQueryTextSentiment" })
  analyzeQueryTextSentiment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: string;

  @SpeakeasyMetadata({ data: "json, name=disableWebhook" })
  disableWebhook?: boolean;

  @SpeakeasyMetadata({ data: "json, name=flowVersions" })
  flowVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=geoLocation" })
  geoLocation?: GoogleTypeLatLng;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowCxV3beta1SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowCxV3beta1SessionEntityType[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookHeaders" })
  webhookHeaders?: Map<string, string>;
}
