import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";


// GoogleCloudDialogflowCxV3beta1ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowCxV3beta1ListIntentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowCxV3beta1Intent })
  intents?: GoogleCloudDialogflowCxV3beta1Intent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
