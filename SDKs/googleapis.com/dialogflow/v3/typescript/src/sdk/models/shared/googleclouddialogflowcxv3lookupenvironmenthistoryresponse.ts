import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Environment } from "./googleclouddialogflowcxv3environment";



// GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse
/** 
 * The response message for Environments.LookupEnvironmentHistory.
**/
export class GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environments", elemType: GoogleCloudDialogflowCxV3Environment })
  environments?: GoogleCloudDialogflowCxV3Environment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
