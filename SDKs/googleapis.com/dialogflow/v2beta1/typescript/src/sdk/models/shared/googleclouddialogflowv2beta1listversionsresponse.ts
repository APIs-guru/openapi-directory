import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Version } from "./googleclouddialogflowv2beta1version";



// GoogleCloudDialogflowV2beta1ListVersionsResponse
/** 
 * The response message for Versions.ListVersions.
**/
export class GoogleCloudDialogflowV2beta1ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: GoogleCloudDialogflowV2beta1Version })
  versions?: GoogleCloudDialogflowV2beta1Version[];
}
