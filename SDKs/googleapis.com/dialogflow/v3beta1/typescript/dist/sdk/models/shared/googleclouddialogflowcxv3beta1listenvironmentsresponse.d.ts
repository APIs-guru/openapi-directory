import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Environment } from "./googleclouddialogflowcxv3beta1environment";
/**
 * The response message for Environments.ListEnvironments.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: GoogleCloudDialogflowCxV3beta1Environment[];
    nextPageToken?: string;
}
