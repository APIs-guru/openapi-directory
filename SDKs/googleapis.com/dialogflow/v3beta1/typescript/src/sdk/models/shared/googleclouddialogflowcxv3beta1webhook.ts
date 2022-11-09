import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1WebhookGenericWebService } from "./googleclouddialogflowcxv3beta1webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3beta1webhookservicedirectoryconfig";


// GoogleCloudDialogflowCxV3beta1Webhook
/** 
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
**/
export class GoogleCloudDialogflowCxV3beta1Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=genericWebService" })
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
