import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig
/** 
 * The message for input config in batch process.
**/
export class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
