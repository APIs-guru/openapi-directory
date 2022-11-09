import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Intent } from "./googleclouddialogflowv2intent";


// GoogleCloudDialogflowV2ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowV2ListIntentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowV2Intent })
  intents?: GoogleCloudDialogflowV2Intent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
