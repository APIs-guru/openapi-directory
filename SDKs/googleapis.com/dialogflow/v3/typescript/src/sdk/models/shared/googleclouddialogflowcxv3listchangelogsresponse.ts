import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Changelog } from "./googleclouddialogflowcxv3changelog";



// GoogleCloudDialogflowCxV3ListChangelogsResponse
/** 
 * The response message for Changelogs.ListChangelogs.
**/
export class GoogleCloudDialogflowCxV3ListChangelogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changelogs", elemType: GoogleCloudDialogflowCxV3Changelog })
  changelogs?: GoogleCloudDialogflowCxV3Changelog[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
