import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleTypeLatLng } from "./googletypelatlng";
import { GoogleCloudDialogflowCxV3beta1SessionEntityType } from "./googleclouddialogflowcxv3beta1sessionentitytype";


// GoogleCloudDialogflowCxV3beta1QueryParameters
/** 
 * Represents the parameters of a conversational query.
**/
export class GoogleCloudDialogflowCxV3beta1QueryParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzeQueryTextSentiment" })
  analyzeQueryTextSentiment?: boolean;

  @Metadata({ data: "json, name=currentPage" })
  currentPage?: string;

  @Metadata({ data: "json, name=disableWebhook" })
  disableWebhook?: boolean;

  @Metadata({ data: "json, name=flowVersions" })
  flowVersions?: string[];

  @Metadata({ data: "json, name=geoLocation" })
  geoLocation?: GoogleTypeLatLng;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=payload" })
  payload?: Map<string, any>;

  @Metadata({ data: "json, name=sessionEntityTypes", elemType: shared.GoogleCloudDialogflowCxV3beta1SessionEntityType })
  sessionEntityTypes?: GoogleCloudDialogflowCxV3beta1SessionEntityType[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=webhookHeaders" })
  webhookHeaders?: Map<string, string>;
}
