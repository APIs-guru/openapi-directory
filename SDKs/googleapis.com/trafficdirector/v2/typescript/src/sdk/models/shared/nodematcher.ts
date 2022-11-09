import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StringMatcher } from "./stringmatcher";
import { StructMatcher } from "./structmatcher";


// NodeMatcher
/** 
 * Specifies the way to match a Node. The match follows AND semantics.
**/
export class NodeMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeId" })
  nodeId?: StringMatcher;

  @Metadata({ data: "json, name=nodeMetadatas", elemType: shared.StructMatcher })
  nodeMetadatas?: StructMatcher[];
}
