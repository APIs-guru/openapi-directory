import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeSpec } from "./nodespec";
import { NodeSpecInput } from "./nodespec";



// Tpu
/** 
 * Details of the TPU resource(s) being requested.
**/
export class Tpu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeSpec", elemType: NodeSpec })
  nodeSpec?: NodeSpec[];
}


// TpuInput
/** 
 * Details of the TPU resource(s) being requested.
**/
export class TpuInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeSpec", elemType: NodeSpecInput })
  nodeSpec?: NodeSpecInput[];
}
