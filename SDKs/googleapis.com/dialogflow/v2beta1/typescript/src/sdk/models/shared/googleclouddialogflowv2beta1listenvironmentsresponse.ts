import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Environment } from "./googleclouddialogflowv2beta1environment";


// GoogleCloudDialogflowV2beta1ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowV2beta1ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.GoogleCloudDialogflowV2beta1Environment })
  environments?: GoogleCloudDialogflowV2beta1Environment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
