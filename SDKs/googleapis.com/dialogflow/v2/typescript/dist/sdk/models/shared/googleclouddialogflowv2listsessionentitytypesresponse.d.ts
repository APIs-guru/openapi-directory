import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SessionEntityType } from "./googleclouddialogflowv2sessionentitytype";
/**
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
**/
export declare class GoogleCloudDialogflowV2ListSessionEntityTypesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sessionEntityTypes?: GoogleCloudDialogflowV2SessionEntityType[];
}
