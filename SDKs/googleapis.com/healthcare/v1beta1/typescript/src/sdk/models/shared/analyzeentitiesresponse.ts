import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entity } from "./entity";
import { EntityMention } from "./entitymention";
import { EntityMentionRelationship } from "./entitymentionrelationship";


// AnalyzeEntitiesResponse
/** 
 * Includes recognized entity mentions and relationships between them.
**/
export class AnalyzeEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.Entity })
  entities?: Entity[];

  @Metadata({ data: "json, name=entityMentions", elemType: shared.EntityMention })
  entityMentions?: EntityMention[];

  @Metadata({ data: "json, name=relationships", elemType: shared.EntityMentionRelationship })
  relationships?: EntityMentionRelationship[];
}
