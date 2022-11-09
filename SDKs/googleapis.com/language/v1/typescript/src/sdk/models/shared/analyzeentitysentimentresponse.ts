import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";


// AnalyzeEntitySentimentResponse
/** 
 * The entity-level sentiment analysis response message.
**/
export class AnalyzeEntitySentimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.Entity })
  entities?: Entity[];

  @Metadata({ data: "json, name=language" })
  language?: string;
}
