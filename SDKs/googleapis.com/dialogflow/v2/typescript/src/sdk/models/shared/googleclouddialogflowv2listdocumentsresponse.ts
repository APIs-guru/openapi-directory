import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Document } from "./googleclouddialogflowv2document";


// GoogleCloudDialogflowV2ListDocumentsResponse
/** 
 * Response message for Documents.ListDocuments.
**/
export class GoogleCloudDialogflowV2ListDocumentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents", elemType: shared.GoogleCloudDialogflowV2Document })
  documents?: GoogleCloudDialogflowV2Document[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
