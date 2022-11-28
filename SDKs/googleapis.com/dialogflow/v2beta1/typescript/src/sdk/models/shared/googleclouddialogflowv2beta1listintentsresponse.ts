import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";



// GoogleCloudDialogflowV2beta1ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowV2beta1ListIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowV2beta1Intent })
  intents?: GoogleCloudDialogflowV2beta1Intent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
