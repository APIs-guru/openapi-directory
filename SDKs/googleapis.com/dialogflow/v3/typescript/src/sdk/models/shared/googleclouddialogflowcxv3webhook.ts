import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3WebhookGenericWebService } from "./googleclouddialogflowcxv3webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3webhookservicedirectoryconfig";


// GoogleCloudDialogflowCxV3Webhook
/** 
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
**/
export class GoogleCloudDialogflowCxV3Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=genericWebService" })
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
