import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1FaqAnswerData
/** 
 * Agent Assist frequently-asked-question answer data.
**/
export class GoogleCloudContactcenterinsightsV1FaqAnswerData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=confidenceScore" })
  confidenceScore?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=queryRecord" })
  queryRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
