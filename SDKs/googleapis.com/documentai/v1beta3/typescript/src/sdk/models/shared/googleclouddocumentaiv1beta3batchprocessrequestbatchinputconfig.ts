import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig
/** 
 * The message for input config in batch process.
**/
export class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
