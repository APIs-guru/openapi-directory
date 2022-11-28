import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";



// AnalyzeEntitiesResponse
/** 
 * The entity analysis response message.
**/
export class AnalyzeEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: Entity })
  entities?: Entity[];

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;
}
