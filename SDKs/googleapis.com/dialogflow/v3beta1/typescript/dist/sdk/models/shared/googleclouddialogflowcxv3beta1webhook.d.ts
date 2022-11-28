import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1WebhookGenericWebService } from "./googleclouddialogflowcxv3beta1webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3beta1webhookservicedirectoryconfig";
/**
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
**/
export declare class GoogleCloudDialogflowCxV3beta1Webhook extends SpeakeasyBase {
    disabled?: boolean;
    displayName?: string;
    genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService;
    name?: string;
    serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig;
    timeout?: string;
}
