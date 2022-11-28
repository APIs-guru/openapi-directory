import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Intent } from "./googleclouddialogflowcxv3beta1intent";



// GoogleCloudDialogflowCxV3beta1ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowCxV3beta1ListIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowCxV3beta1Intent })
  intents?: GoogleCloudDialogflowCxV3beta1Intent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
