import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Environment } from "./googleclouddialogflowcxv3beta1environment";



// GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudDialogflowCxV3beta1Environment })
  environments?: GoogleCloudDialogflowCxV3beta1Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
