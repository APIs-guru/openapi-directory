import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Changelog } from "./googleclouddialogflowcxv3beta1changelog";



// GoogleCloudDialogflowCxV3beta1ListChangelogsResponse
/** 
 * The response message for Changelogs.ListChangelogs.
**/
export class GoogleCloudDialogflowCxV3beta1ListChangelogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changelogs", elemType: GoogleCloudDialogflowCxV3beta1Changelog })
  changelogs?: GoogleCloudDialogflowCxV3beta1Changelog[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
