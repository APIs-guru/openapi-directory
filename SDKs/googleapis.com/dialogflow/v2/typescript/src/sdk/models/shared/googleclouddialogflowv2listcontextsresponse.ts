import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";


// GoogleCloudDialogflowV2ListContextsResponse
/** 
 * The response message for Contexts.ListContexts.
**/
export class GoogleCloudDialogflowV2ListContextsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts", elemType: shared.GoogleCloudDialogflowV2Context })
  contexts?: GoogleCloudDialogflowV2Context[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
