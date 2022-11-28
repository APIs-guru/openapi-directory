import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { EntityMention } from "./entitymention";
import { EntityMentionRelationship } from "./entitymentionrelationship";



// AnalyzeEntitiesResponse
/** 
 * Includes recognized entity mentions and relationships between them.
**/
export class AnalyzeEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: Entity })
  entities?: Entity[];

  @SpeakeasyMetadata({ data: "json, name=entityMentions", elemType: EntityMention })
  entityMentions?: EntityMention[];

  @SpeakeasyMetadata({ data: "json, name=relationships", elemType: EntityMentionRelationship })
  relationships?: EntityMentionRelationship[];
}
