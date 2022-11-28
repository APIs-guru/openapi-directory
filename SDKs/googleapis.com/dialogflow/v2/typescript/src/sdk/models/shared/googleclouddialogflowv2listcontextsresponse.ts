import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";



// GoogleCloudDialogflowV2ListContextsResponse
/** 
 * The response message for Contexts.ListContexts.
**/
export class GoogleCloudDialogflowV2ListContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: GoogleCloudDialogflowV2Context })
  contexts?: GoogleCloudDialogflowV2Context[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
