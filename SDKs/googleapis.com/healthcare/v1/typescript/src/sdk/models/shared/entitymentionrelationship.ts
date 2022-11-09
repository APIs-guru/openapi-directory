import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EntityMentionRelationship
/** 
 * Defines directed relationship from one entity mention to another.
**/
export class EntityMentionRelationship extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=subjectId" })
  subjectId?: string;
}
