import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";


// GoogleCloudDialogflowCxV3ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowCxV3ListIntentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowCxV3Intent })
  intents?: GoogleCloudDialogflowCxV3Intent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
