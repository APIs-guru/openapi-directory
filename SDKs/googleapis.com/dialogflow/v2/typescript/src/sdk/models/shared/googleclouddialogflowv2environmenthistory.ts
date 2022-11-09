import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2EnvironmentHistoryEntry } from "./googleclouddialogflowv2environmenthistoryentry";


// GoogleCloudDialogflowV2EnvironmentHistory
/** 
 * The response message for Environments.GetEnvironmentHistory.
**/
export class GoogleCloudDialogflowV2EnvironmentHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.GoogleCloudDialogflowV2EnvironmentHistoryEntry })
  entries?: GoogleCloudDialogflowV2EnvironmentHistoryEntry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
