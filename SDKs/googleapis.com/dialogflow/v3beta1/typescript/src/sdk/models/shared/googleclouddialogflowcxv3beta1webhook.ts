import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1WebhookGenericWebService } from "./googleclouddialogflowcxv3beta1webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3beta1webhookservicedirectoryconfig";



// GoogleCloudDialogflowCxV3beta1Webhook
/** 
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
**/
export class GoogleCloudDialogflowCxV3beta1Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=genericWebService" })
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
