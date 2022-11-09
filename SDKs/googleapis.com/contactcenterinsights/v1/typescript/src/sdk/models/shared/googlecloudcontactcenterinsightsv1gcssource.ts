import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1GcsSource
/** 
 * A Cloud Storage source of conversation data.
**/
export class GoogleCloudContactcenterinsightsV1GcsSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioUri" })
  audioUri?: string;

  @Metadata({ data: "json, name=transcriptUri" })
  transcriptUri?: string;
}
