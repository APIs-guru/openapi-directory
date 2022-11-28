import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Environment } from "./googleclouddialogflowcxv3environment";



// GoogleCloudDialogflowCxV3ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowCxV3ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudDialogflowCxV3Environment })
  environments?: GoogleCloudDialogflowCxV3Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
