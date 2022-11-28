import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Environment } from "./googleclouddialogflowcxv3environment";
/**
 * The response message for Environments.ListEnvironments.
**/
export declare class GoogleCloudDialogflowCxV3ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: GoogleCloudDialogflowCxV3Environment[];
    nextPageToken?: string;
}
