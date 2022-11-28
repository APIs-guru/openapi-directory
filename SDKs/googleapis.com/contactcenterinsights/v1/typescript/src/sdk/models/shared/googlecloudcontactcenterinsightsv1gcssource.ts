import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1GcsSource
/** 
 * A Cloud Storage source of conversation data.
**/
export class GoogleCloudContactcenterinsightsV1GcsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioUri" })
  audioUri?: string;

  @SpeakeasyMetadata({ data: "json, name=transcriptUri" })
  transcriptUri?: string;
}
