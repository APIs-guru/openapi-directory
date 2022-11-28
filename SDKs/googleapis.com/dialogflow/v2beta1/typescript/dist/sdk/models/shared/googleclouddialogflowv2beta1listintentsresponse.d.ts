import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";
/**
 * The response message for Intents.ListIntents.
**/
export declare class GoogleCloudDialogflowV2beta1ListIntentsResponse extends SpeakeasyBase {
    intents?: GoogleCloudDialogflowV2beta1Intent[];
    nextPageToken?: string;
}
