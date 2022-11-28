import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SessionEntityType } from "./googleclouddialogflowcxv3beta1sessionentitytype";
/**
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sessionEntityTypes?: GoogleCloudDialogflowCxV3beta1SessionEntityType[];
}
