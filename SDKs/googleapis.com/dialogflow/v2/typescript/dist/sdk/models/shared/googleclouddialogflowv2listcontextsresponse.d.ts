import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
/**
 * The response message for Contexts.ListContexts.
**/
export declare class GoogleCloudDialogflowV2ListContextsResponse extends SpeakeasyBase {
    contexts?: GoogleCloudDialogflowV2Context[];
    nextPageToken?: string;
}
