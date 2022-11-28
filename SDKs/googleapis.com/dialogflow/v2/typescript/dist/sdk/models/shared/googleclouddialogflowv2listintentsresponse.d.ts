import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";
/**
 * The response message for Intents.ListIntents.
**/
export declare class GoogleCloudDialogflowV2ListIntentsResponse extends SpeakeasyBase {
    intents?: GoogleCloudDialogflowV2Intent[];
    nextPageToken?: string;
}
