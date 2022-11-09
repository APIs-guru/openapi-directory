import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Changelog } from "./googleclouddialogflowcxv3changelog";


// GoogleCloudDialogflowCxV3ListChangelogsResponse
/** 
 * The response message for Changelogs.ListChangelogs.
**/
export class GoogleCloudDialogflowCxV3ListChangelogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changelogs", elemType: shared.GoogleCloudDialogflowCxV3Changelog })
  changelogs?: GoogleCloudDialogflowCxV3Changelog[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
