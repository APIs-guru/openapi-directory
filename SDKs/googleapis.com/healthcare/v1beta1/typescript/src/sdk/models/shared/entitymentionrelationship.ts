import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityMentionRelationship
/** 
 * Defines directed relationship from one entity mention to another.
**/
export class EntityMentionRelationship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectId" })
  subjectId?: string;
}
