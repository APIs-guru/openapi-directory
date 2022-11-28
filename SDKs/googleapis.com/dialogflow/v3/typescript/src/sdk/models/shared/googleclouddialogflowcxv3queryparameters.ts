import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowCxV3SessionEntityType } from "./googleclouddialogflowcxv3sessionentitytype";



// GoogleCloudDialogflowCxV3QueryParameters
/** 
 * Represents the parameters of a conversational query.
**/
export class GoogleCloudDialogflowCxV3QueryParameters extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=sessionEntityTypes", elemType: GoogleCloudDialogflowCxV3SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowCxV3SessionEntityType[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookHeaders" })
  webhookHeaders?: Map<string, string>;
}
