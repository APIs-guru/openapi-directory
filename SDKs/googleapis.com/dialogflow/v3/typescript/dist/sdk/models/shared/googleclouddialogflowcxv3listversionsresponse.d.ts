import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Version } from "./googleclouddialogflowcxv3version";
/**
 * The response message for Versions.ListVersions.
**/
export declare class GoogleCloudDialogflowCxV3ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: GoogleCloudDialogflowCxV3Version[];
}
