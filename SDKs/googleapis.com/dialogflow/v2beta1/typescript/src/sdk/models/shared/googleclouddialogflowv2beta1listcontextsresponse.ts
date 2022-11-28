import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";



// GoogleCloudDialogflowV2beta1ListContextsResponse
/** 
 * The response message for Contexts.ListContexts.
**/
export class GoogleCloudDialogflowV2beta1ListContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: GoogleCloudDialogflowV2beta1Context })
  contexts?: GoogleCloudDialogflowV2beta1Context[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
