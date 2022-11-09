import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Environment } from "./googleclouddialogflowcxv3environment";


// GoogleCloudDialogflowCxV3ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowCxV3ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.GoogleCloudDialogflowCxV3Environment })
  environments?: GoogleCloudDialogflowCxV3Environment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
