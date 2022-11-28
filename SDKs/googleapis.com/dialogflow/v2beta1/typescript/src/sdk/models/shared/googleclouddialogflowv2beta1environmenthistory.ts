import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry } from "./googleclouddialogflowv2beta1environmenthistoryentry";



// GoogleCloudDialogflowV2beta1EnvironmentHistory
/** 
 * The response message for Environments.GetEnvironmentHistory.
**/
export class GoogleCloudDialogflowV2beta1EnvironmentHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry })
  entries?: GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
