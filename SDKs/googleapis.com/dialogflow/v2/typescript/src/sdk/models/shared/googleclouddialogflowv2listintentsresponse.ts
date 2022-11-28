import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";



// GoogleCloudDialogflowV2ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowV2ListIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowV2Intent })
  intents?: GoogleCloudDialogflowV2Intent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
