import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Version } from "./googleclouddialogflowcxv3beta1version";
/**
 * The response message for Versions.ListVersions.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: GoogleCloudDialogflowCxV3beta1Version[];
}
