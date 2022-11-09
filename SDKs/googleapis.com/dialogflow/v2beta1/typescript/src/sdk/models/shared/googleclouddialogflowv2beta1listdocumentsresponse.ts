import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Document } from "./googleclouddialogflowv2beta1document";


// GoogleCloudDialogflowV2beta1ListDocumentsResponse
/** 
 * Response message for Documents.ListDocuments.
**/
export class GoogleCloudDialogflowV2beta1ListDocumentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents", elemType: shared.GoogleCloudDialogflowV2beta1Document })
  documents?: GoogleCloudDialogflowV2beta1Document[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
