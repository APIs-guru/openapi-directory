import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Version } from "./googleclouddialogflowcxv3version";


// GoogleCloudDialogflowCxV3ListVersionsResponse
/** 
 * The response message for Versions.ListVersions.
**/
export class GoogleCloudDialogflowCxV3ListVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.GoogleCloudDialogflowCxV3Version })
  versions?: GoogleCloudDialogflowCxV3Version[];
}
