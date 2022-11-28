import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Changelog } from "./googleclouddialogflowcxv3changelog";
/**
 * The response message for Changelogs.ListChangelogs.
**/
export declare class GoogleCloudDialogflowCxV3ListChangelogsResponse extends SpeakeasyBase {
    changelogs?: GoogleCloudDialogflowCxV3Changelog[];
    nextPageToken?: string;
}
