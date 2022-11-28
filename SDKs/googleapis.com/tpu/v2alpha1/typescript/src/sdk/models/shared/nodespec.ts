import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeInput } from "./node";
import { Node } from "./node";



// NodeSpecInput
/** 
 * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
**/
export class NodeSpecInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: NodeInput;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}


// NodeSpec
/** 
 * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
**/
export class NodeSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: Node;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
