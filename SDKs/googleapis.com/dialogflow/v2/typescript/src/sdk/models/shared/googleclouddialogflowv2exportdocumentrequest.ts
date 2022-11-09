import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2GcsDestination } from "./googleclouddialogflowv2gcsdestination";


// GoogleCloudDialogflowV2ExportDocumentRequest
/** 
 * Request message for Documents.ExportDocument.
**/
export class GoogleCloudDialogflowV2ExportDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportFullContent" })
  exportFullContent?: boolean;

  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudDialogflowV2GcsDestination;

  @Metadata({ data: "json, name=smartMessagingPartialUpdate" })
  smartMessagingPartialUpdate?: boolean;
}
