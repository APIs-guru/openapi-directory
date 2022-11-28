import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
/**
 * The response message for Contexts.ListContexts.
**/
export declare class GoogleCloudDialogflowV2beta1ListContextsResponse extends SpeakeasyBase {
    contexts?: GoogleCloudDialogflowV2beta1Context[];
    nextPageToken?: string;
}
