import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Version } from "./googleclouddialogflowcxv3version";



// GoogleCloudDialogflowCxV3ListVersionsResponse
/** 
 * The response message for Versions.ListVersions.
**/
export class GoogleCloudDialogflowCxV3ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: GoogleCloudDialogflowCxV3Version })
  versions?: GoogleCloudDialogflowCxV3Version[];
}
