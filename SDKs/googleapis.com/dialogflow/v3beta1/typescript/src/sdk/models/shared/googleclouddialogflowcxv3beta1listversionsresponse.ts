import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Version } from "./googleclouddialogflowcxv3beta1version";


// GoogleCloudDialogflowCxV3beta1ListVersionsResponse
/** 
 * The response message for Versions.ListVersions.
**/
export class GoogleCloudDialogflowCxV3beta1ListVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.GoogleCloudDialogflowCxV3beta1Version })
  versions?: GoogleCloudDialogflowCxV3beta1Version[];
}
