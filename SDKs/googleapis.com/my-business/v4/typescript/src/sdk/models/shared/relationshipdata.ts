import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationshipData
/** 
 * Information of all parent and children locations related to this one.
**/
export class RelationshipData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentChain" })
  parentChain?: string;
}
