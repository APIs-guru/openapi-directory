import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Sentiment
/** 
 * Represents the feeling associated with the entire text or entities in the text. Next ID: 6
**/
export class Sentiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
