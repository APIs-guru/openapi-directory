import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2Sentiment
/** 
 * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
**/
export class GoogleCloudDialogflowV2Sentiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
