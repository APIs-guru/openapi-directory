import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1SmartReplyData
/** 
 * Agent Assist Smart Reply data.
**/
export class GoogleCloudContactcenterinsightsV1SmartReplyData extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @Metadata({ data: "json, name=reply" })
  reply?: string;
}
