import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



// AnalyzeEntitySentimentResponse
/** 
 * The entity-level sentiment analysis response message.
**/
export class AnalyzeEntitySentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: Entity })
  entities?: Entity[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;
}
