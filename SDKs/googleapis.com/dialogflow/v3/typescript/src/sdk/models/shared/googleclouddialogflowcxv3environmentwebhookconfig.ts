import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Webhook } from "./googleclouddialogflowcxv3webhook";


// GoogleCloudDialogflowCxV3EnvironmentWebhookConfig
/** 
 * Configuration for webhooks.
**/
export class GoogleCloudDialogflowCxV3EnvironmentWebhookConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhookOverrides", elemType: shared.GoogleCloudDialogflowCxV3Webhook })
  webhookOverrides?: GoogleCloudDialogflowCxV3Webhook[];
}
