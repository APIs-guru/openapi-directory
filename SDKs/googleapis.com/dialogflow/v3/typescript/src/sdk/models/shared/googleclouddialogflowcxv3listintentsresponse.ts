import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";



// GoogleCloudDialogflowCxV3ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowCxV3ListIntentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowCxV3Intent })
  intents?: GoogleCloudDialogflowCxV3Intent[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
