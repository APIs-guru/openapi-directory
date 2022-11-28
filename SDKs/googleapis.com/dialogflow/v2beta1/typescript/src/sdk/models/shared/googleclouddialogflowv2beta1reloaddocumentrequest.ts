import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1GcsSource } from "./googleclouddialogflowv2beta1gcssource";



// GoogleCloudDialogflowV2beta1ReloadDocumentRequest
/** 
 * Request message for Documents.ReloadDocument.
**/
export class GoogleCloudDialogflowV2beta1ReloadDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDialogflowV2beta1GcsSource;

  @SpeakeasyMetadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;
}
