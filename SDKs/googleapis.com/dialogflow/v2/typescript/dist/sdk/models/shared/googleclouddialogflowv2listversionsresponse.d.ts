import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Version } from "./googleclouddialogflowv2version";
/**
 * The response message for Versions.ListVersions.
**/
export declare class GoogleCloudDialogflowV2ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: GoogleCloudDialogflowV2Version[];
}
