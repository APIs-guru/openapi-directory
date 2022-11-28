import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Webhook } from "./googleclouddialogflowcxv3beta1webhook";



// GoogleCloudDialogflowCxV3beta1ListWebhooksResponse
/** 
 * The response message for Webhooks.ListWebhooks.
**/
export class GoogleCloudDialogflowCxV3beta1ListWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: GoogleCloudDialogflowCxV3beta1Webhook })
  webhooks?: GoogleCloudDialogflowCxV3beta1Webhook[];
}
