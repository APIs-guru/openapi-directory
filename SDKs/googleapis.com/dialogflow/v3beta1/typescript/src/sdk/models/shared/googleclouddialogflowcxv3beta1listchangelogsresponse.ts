import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Changelog } from "./googleclouddialogflowcxv3beta1changelog";


// GoogleCloudDialogflowCxV3beta1ListChangelogsResponse
/** 
 * The response message for Changelogs.ListChangelogs.
**/
export class GoogleCloudDialogflowCxV3beta1ListChangelogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changelogs", elemType: shared.GoogleCloudDialogflowCxV3beta1Changelog })
  changelogs?: GoogleCloudDialogflowCxV3beta1Changelog[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
