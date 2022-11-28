import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3WebhookGenericWebService } from "./googleclouddialogflowcxv3webhookgenericwebservice";
import { GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig } from "./googleclouddialogflowcxv3webhookservicedirectoryconfig";
/**
 * Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
**/
export declare class GoogleCloudDialogflowCxV3Webhook extends SpeakeasyBase {
    disabled?: boolean;
    displayName?: string;
    genericWebService?: GoogleCloudDialogflowCxV3WebhookGenericWebService;
    name?: string;
    serviceDirectory?: GoogleCloudDialogflowCxV3WebhookServiceDirectoryConfig;
    timeout?: string;
}
