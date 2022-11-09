import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationshipData
/** 
 * Information of all parent and children locations related to this one.
**/
export class RelationshipData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parentChain" })
  parentChain?: string;
}
