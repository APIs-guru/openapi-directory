import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Version } from "./googleclouddialogflowcxv3beta1version";



// GoogleCloudDialogflowCxV3beta1ListVersionsResponse
/** 
 * The response message for Versions.ListVersions.
**/
export class GoogleCloudDialogflowCxV3beta1ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: GoogleCloudDialogflowCxV3beta1Version })
  versions?: GoogleCloudDialogflowCxV3beta1Version[];
}
