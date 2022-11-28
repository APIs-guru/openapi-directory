import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EnvironmentHistoryEntry } from "./googleclouddialogflowv2environmenthistoryentry";



// GoogleCloudDialogflowV2EnvironmentHistory
/** 
 * The response message for Environments.GetEnvironmentHistory.
**/
export class GoogleCloudDialogflowV2EnvironmentHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: GoogleCloudDialogflowV2EnvironmentHistoryEntry })
  entries?: GoogleCloudDialogflowV2EnvironmentHistoryEntry[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
