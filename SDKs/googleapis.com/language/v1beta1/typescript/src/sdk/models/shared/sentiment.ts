import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Sentiment
/** 
 * Represents the feeling associated with the entire text or entities in the text.
**/
export class Sentiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @Metadata({ data: "json, name=polarity" })
  polarity?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
