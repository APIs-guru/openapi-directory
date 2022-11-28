import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1SmartReplyData
/** 
 * Agent Assist Smart Reply data.
**/
export class GoogleCloudContactcenterinsightsV1SmartReplyData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=reply" })
  reply?: string;
}
