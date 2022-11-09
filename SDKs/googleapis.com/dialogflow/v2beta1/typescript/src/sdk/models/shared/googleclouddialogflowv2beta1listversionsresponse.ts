import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Version } from "./googleclouddialogflowv2beta1version";


// GoogleCloudDialogflowV2beta1ListVersionsResponse
/** 
 * The response message for Versions.ListVersions.
**/
export class GoogleCloudDialogflowV2beta1ListVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.GoogleCloudDialogflowV2beta1Version })
  versions?: GoogleCloudDialogflowV2beta1Version[];
}
