import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";
/**
 * The response message for Intents.ListIntents.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListIntentsResponse extends SpeakeasyBase {
    intents?: GoogleCloudDialogflowCxV3beta1Intent[];
    nextPageToken?: string;
}
