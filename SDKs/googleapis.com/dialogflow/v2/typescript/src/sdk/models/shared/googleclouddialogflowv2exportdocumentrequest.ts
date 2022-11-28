import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2GcsDestination } from "./googleclouddialogflowv2gcsdestination";



// GoogleCloudDialogflowV2ExportDocumentRequest
/** 
 * Request message for Documents.ExportDocument.
**/
export class GoogleCloudDialogflowV2ExportDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportFullContent" })
  exportFullContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudDialogflowV2GcsDestination;

  @SpeakeasyMetadata({ data: "json, name=smartMessagingPartialUpdate" })
  smartMessagingPartialUpdate?: boolean;
}
