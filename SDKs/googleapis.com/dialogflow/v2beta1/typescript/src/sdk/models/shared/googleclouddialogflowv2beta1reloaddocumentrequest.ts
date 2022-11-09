import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1GcsSource } from "./googleclouddialogflowv2beta1gcssource";


// GoogleCloudDialogflowV2beta1ReloadDocumentRequest
/** 
 * Request message for Documents.ReloadDocument.
**/
export class GoogleCloudDialogflowV2beta1ReloadDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDialogflowV2beta1GcsSource;

  @Metadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;
}
