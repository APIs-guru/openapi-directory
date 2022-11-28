import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Version } from "./googleclouddialogflowv2version";



// GoogleCloudDialogflowV2ListVersionsResponse
/** 
 * The response message for Versions.ListVersions.
**/
export class GoogleCloudDialogflowV2ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: GoogleCloudDialogflowV2Version })
  versions?: GoogleCloudDialogflowV2Version[];
}
