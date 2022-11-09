import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkedEntity
/** 
 * EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence.
**/
export class LinkedEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityId" })
  entityId?: string;
}
