import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Webhook } from "./googleclouddialogflowcxv3webhook";


// GoogleCloudDialogflowCxV3ListWebhooksResponse
/** 
 * The response message for Webhooks.ListWebhooks.
**/
export class GoogleCloudDialogflowCxV3ListWebhooksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=webhooks", elemType: shared.GoogleCloudDialogflowCxV3Webhook })
  webhooks?: GoogleCloudDialogflowCxV3Webhook[];
}
