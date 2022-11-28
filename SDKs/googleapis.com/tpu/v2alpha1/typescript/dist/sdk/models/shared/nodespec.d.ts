import { SpeakeasyBase } from "../../../internal/utils";
import { NodeInput } from "./node";
import { Node } from "./node";
/**
 * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
**/
export declare class NodeSpecInput extends SpeakeasyBase {
    node?: NodeInput;
    nodeId?: string;
    parent?: string;
}
/**
 * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
**/
export declare class NodeSpec extends SpeakeasyBase {
    node?: Node;
    nodeId?: string;
    parent?: string;
}
