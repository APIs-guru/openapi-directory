import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Changelog } from "./googleclouddialogflowcxv3beta1changelog";
/**
 * The response message for Changelogs.ListChangelogs.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListChangelogsResponse extends SpeakeasyBase {
    changelogs?: GoogleCloudDialogflowCxV3beta1Changelog[];
    nextPageToken?: string;
}
