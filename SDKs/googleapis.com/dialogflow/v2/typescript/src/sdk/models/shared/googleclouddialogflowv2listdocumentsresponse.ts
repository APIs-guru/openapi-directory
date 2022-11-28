import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Document } from "./googleclouddialogflowv2document";



// GoogleCloudDialogflowV2ListDocumentsResponse
/** 
 * Response message for Documents.ListDocuments.
**/
export class GoogleCloudDialogflowV2ListDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDialogflowV2Document })
  documents?: GoogleCloudDialogflowV2Document[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
