import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=categories", elemType: shared.ClassificationCategory })
  categories?: ClassificationCategory[];

  @Metadata({ data: "json, name=documentSentiment" })
  documentSentiment?: Sentiment;

  @Metadata({ data: "json, name=entities", elemType: shared.Entity })
  entities?: Entity[];

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=sentences", elemType: shared.Sentence })
  sentences?: Sentence[];

  @Metadata({ data: "json, name=tokens", elemType: shared.Token })
  tokens?: Token[];
}
