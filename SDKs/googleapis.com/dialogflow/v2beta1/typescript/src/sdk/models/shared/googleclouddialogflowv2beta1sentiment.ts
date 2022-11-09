import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1Sentiment
/** 
 * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
**/
export class GoogleCloudDialogflowV2beta1Sentiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
