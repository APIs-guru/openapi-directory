import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Webhook } from "./googleclouddialogflowcxv3beta1webhook";



// GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig
/** 
 * Configuration for webhooks.
**/
export class GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookOverrides", elemType: GoogleCloudDialogflowCxV3beta1Webhook })
  webhookOverrides?: GoogleCloudDialogflowCxV3beta1Webhook[];
}
