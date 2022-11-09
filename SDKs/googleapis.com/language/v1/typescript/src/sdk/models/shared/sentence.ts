import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Sentiment } from "./sentiment";
import { TextSpan } from "./textspan";


// Sentence
/** 
 * Represents a sentence in the input document.
**/
export class Sentence extends SpeakeasyBase {
  @Metadata({ data: "json, name=sentiment" })
  sentiment?: Sentiment;

  @Metadata({ data: "json, name=text" })
  text?: TextSpan;
}
