import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Environment } from "./googleclouddialogflowv2environment";



// GoogleCloudDialogflowV2ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowV2ListEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudDialogflowV2Environment })
  environments?: GoogleCloudDialogflowV2Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
