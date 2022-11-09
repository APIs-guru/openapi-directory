import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig
/** 
 * The message for output config in batch process.
**/
export class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: string;
}
