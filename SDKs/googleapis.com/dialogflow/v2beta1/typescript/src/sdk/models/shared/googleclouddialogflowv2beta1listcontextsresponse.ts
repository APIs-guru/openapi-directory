import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";


// GoogleCloudDialogflowV2beta1ListContextsResponse
/** 
 * The response message for Contexts.ListContexts.
**/
export class GoogleCloudDialogflowV2beta1ListContextsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts", elemType: shared.GoogleCloudDialogflowV2beta1Context })
  contexts?: GoogleCloudDialogflowV2beta1Context[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
