import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationCategory } from "./classificationcategory";
import { Sentiment } from "./sentiment";
import { Entity } from "./entity";
import { Sentence } from "./sentence";
import { Token } from "./token";



// AnnotateTextResponse
/** 
 * The text annotations response message.
**/
export class AnnotateTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: ClassificationCategory })
  categories?: ClassificationCategory[];

  @SpeakeasyMetadata({ data: "json, name=documentSentiment" })
  documentSentiment?: Sentiment;

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: Entity })
  entities?: Entity[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=sentences", elemType: Sentence })
  sentences?: Sentence[];

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: Token })
  tokens?: Token[];
}
