import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig
/** 
 * The message for output config in batch process.
**/
export class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: string;
}
