import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Environment } from "./googleclouddialogflowv2environment";
/**
 * The response message for Environments.ListEnvironments.
**/
export declare class GoogleCloudDialogflowV2ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: GoogleCloudDialogflowV2Environment[];
    nextPageToken?: string;
}
