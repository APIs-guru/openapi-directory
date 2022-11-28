import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SessionEntityType } from "./googleclouddialogflowv2beta1sessionentitytype";
/**
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export declare class GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sessionEntityTypes?: GoogleCloudDialogflowV2beta1SessionEntityType[];
}
