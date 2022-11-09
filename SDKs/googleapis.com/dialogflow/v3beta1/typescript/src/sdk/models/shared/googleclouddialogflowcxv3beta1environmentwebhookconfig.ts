import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Webhook } from "./googleclouddialogflowcxv3beta1webhook";


// GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig
/** 
 * Configuration for webhooks.
**/
export class GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhookOverrides", elemType: shared.GoogleCloudDialogflowCxV3beta1Webhook })
  webhookOverrides?: GoogleCloudDialogflowCxV3beta1Webhook[];
}
