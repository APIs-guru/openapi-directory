import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { EntityMention } from "./entitymention";
import { EntityMentionRelationship } from "./entitymentionrelationship";
/**
 * Includes recognized entity mentions and relationships between them.
**/
export declare class AnalyzeEntitiesResponse extends SpeakeasyBase {
    entities?: Entity[];
    entityMentions?: EntityMention[];
    relationships?: EntityMentionRelationship[];
}
