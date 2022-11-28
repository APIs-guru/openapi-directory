import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Webhook } from "./googleclouddialogflowcxv3webhook";



// GoogleCloudDialogflowCxV3EnvironmentWebhookConfig
/** 
 * Configuration for webhooks.
**/
export class GoogleCloudDialogflowCxV3EnvironmentWebhookConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookOverrides", elemType: GoogleCloudDialogflowCxV3Webhook })
  webhookOverrides?: GoogleCloudDialogflowCxV3Webhook[];
}
