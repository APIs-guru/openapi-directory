import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Environment } from "./googleclouddialogflowv2beta1environment";
/**
 * The response message for Environments.ListEnvironments.
**/
export declare class GoogleCloudDialogflowV2beta1ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: GoogleCloudDialogflowV2beta1Environment[];
    nextPageToken?: string;
}
