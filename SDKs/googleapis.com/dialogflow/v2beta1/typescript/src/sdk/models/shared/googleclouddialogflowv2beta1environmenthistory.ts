import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry } from "./googleclouddialogflowv2beta1environmenthistoryentry";


// GoogleCloudDialogflowV2beta1EnvironmentHistory
/** 
 * The response message for Environments.GetEnvironmentHistory.
**/
export class GoogleCloudDialogflowV2beta1EnvironmentHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry })
  entries?: GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
