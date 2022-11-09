import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Webhook } from "./googleclouddialogflowcxv3beta1webhook";


// GoogleCloudDialogflowCxV3beta1ListWebhooksResponse
/** 
 * The response message for Webhooks.ListWebhooks.
**/
export class GoogleCloudDialogflowCxV3beta1ListWebhooksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=webhooks", elemType: shared.GoogleCloudDialogflowCxV3beta1Webhook })
  webhooks?: GoogleCloudDialogflowCxV3beta1Webhook[];
}
