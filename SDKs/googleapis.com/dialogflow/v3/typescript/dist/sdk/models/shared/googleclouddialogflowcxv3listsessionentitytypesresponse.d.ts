import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3SessionEntityType } from "./googleclouddialogflowcxv3sessionentitytype";
/**
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export declare class GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sessionEntityTypes?: GoogleCloudDialogflowCxV3SessionEntityType[];
}
