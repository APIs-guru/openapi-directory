import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Environment } from "./googleclouddialogflowcxv3beta1environment";


// GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse
/** 
 * The response message for Environments.ListEnvironments.
**/
export class GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environments", elemType: shared.GoogleCloudDialogflowCxV3beta1Environment })
  environments?: GoogleCloudDialogflowCxV3beta1Environment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
