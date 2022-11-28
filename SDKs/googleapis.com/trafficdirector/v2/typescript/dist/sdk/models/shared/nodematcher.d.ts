import { SpeakeasyBase } from "../../../internal/utils";
import { StringMatcher } from "./stringmatcher";
import { StructMatcher } from "./structmatcher";
/**
 * Specifies the way to match a Node. The match follows AND semantics.
**/
export declare class NodeMatcher extends SpeakeasyBase {
    nodeId?: StringMatcher;
    nodeMetadatas?: StructMatcher[];
}
