import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Environment } from "./googleclouddialogflowv2environment";


// GoogleCloudDialogflowV2ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowV2ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.GoogleCloudDialogflowV2Environment })
  environments?: GoogleCloudDialogflowV2Environment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
