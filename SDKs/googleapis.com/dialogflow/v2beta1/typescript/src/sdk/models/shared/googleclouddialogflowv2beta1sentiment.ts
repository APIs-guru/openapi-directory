import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1Sentiment
/** 
 * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
**/
export class GoogleCloudDialogflowV2beta1Sentiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
