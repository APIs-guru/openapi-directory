import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Webhook } from "./googleclouddialogflowcxv3beta1webhook";
/**
 * The response message for Webhooks.ListWebhooks.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListWebhooksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    webhooks?: GoogleCloudDialogflowCxV3beta1Webhook[];
}
