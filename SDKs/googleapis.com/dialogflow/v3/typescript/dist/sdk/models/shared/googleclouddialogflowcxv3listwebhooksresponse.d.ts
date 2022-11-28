import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Webhook } from "./googleclouddialogflowcxv3webhook";
/**
 * The response message for Webhooks.ListWebhooks.
**/
export declare class GoogleCloudDialogflowCxV3ListWebhooksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    webhooks?: GoogleCloudDialogflowCxV3Webhook[];
}
