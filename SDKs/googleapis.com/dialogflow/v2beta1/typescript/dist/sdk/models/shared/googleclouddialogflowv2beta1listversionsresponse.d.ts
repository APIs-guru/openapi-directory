import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Version } from "./googleclouddialogflowv2beta1version";
/**
 * The response message for Versions.ListVersions.
**/
export declare class GoogleCloudDialogflowV2beta1ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: GoogleCloudDialogflowV2beta1Version[];
}
