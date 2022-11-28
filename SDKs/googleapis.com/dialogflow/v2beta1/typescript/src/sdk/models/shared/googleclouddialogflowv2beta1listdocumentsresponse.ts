import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Document } from "./googleclouddialogflowv2beta1document";



// GoogleCloudDialogflowV2beta1ListDocumentsResponse
/** 
 * Response message for Documents.ListDocuments.
**/
export class GoogleCloudDialogflowV2beta1ListDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents", elemType: GoogleCloudDialogflowV2beta1Document })
  documents?: GoogleCloudDialogflowV2beta1Document[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
