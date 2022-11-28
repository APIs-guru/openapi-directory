import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Webhook } from "./googleclouddialogflowcxv3webhook";



// GoogleCloudDialogflowCxV3ListWebhooksResponse
/** 
 * The response message for Webhooks.ListWebhooks.
**/
export class GoogleCloudDialogflowCxV3ListWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: GoogleCloudDialogflowCxV3Webhook })
  webhooks?: GoogleCloudDialogflowCxV3Webhook[];
}
