import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
/**
 * The response message for Intents.ListIntents.
**/
export declare class GoogleCloudDialogflowCxV3ListIntentsResponse extends SpeakeasyBase {
    intents?: GoogleCloudDialogflowCxV3Intent[];
    nextPageToken?: string;
}
