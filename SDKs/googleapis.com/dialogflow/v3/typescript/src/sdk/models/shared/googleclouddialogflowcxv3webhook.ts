import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3WebhookGenericWebService } from "./googleclouddialogflowcxv3webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3webhookservicedirectoryconfig";



// GoogleCloudDialogflowCxV3Webhook
/** 
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
**/
export class GoogleCloudDialogflowCxV3Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=genericWebService" })
  genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDirectory" })
  serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
