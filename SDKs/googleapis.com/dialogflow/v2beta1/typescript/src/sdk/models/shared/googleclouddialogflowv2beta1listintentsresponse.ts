import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Intent } from "./googleclouddialogflowv2beta1intent";


// GoogleCloudDialogflowV2beta1ListIntentsResponse
/** 
 * The response message for Intents.ListIntents.
**/
export class GoogleCloudDialogflowV2beta1ListIntentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowV2beta1Intent })
  intents?: GoogleCloudDialogflowV2beta1Intent[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
