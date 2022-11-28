import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringMatcher } from "./stringmatcher";
import { StructMatcher } from "./structmatcher";



// NodeMatcher
/** 
 * Specifies the way to match a Node. The match follows AND semantics.
**/
export class NodeMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: StringMatcher;

  @SpeakeasyMetadata({ data: "json, name=nodeMetadatas", elemType: StructMatcher })
  nodeMetadatas?: StructMatcher[];
}
