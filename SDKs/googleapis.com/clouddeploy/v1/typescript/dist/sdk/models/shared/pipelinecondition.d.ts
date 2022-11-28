import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineReadyCondition } from "./pipelinereadycondition";
import { TargetsPresentCondition } from "./targetspresentcondition";
/**
 * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
**/
export declare class PipelineCondition extends SpeakeasyBase {
    pipelineReadyCondition?: PipelineReadyCondition;
    targetsPresentCondition?: TargetsPresentCondition;
}
