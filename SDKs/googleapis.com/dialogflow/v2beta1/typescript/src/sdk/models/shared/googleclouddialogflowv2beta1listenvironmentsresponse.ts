import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Environment } from "./googleclouddialogflowv2beta1environment";



// GoogleCloudDialogflowV2beta1ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowV2beta1ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudDialogflowV2beta1Environment })
  environments?: GoogleCloudDialogflowV2beta1Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
