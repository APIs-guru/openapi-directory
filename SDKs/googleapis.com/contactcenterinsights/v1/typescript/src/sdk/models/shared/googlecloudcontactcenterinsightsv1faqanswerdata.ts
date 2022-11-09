import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1FaqAnswerData
/** 
 * Agent Assist frequently-asked-question answer data.
**/
export class GoogleCloudContactcenterinsightsV1FaqAnswerData extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @Metadata({ data: "json, name=question" })
  question?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
