import { SpeakeasyBase } from "../../../internal/utils";
import { NodeSpec } from "./nodespec";
import { NodeSpecInput } from "./nodespec";
/**
 * Details of the TPU resource(s) being requested.
**/
export declare class Tpu extends SpeakeasyBase {
    nodeSpec?: NodeSpec[];
}
/**
 * Details of the TPU resource(s) being requested.
**/
export declare class TpuInput extends SpeakeasyBase {
    nodeSpec?: NodeSpecInput[];
}
