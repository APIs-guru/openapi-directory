import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineReadyCondition } from "./pipelinereadycondition";
import { TargetsPresentCondition } from "./targetspresentcondition";



// PipelineCondition
/** 
 * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
**/
export class PipelineCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineReadyCondition" })
  pipelineReadyCondition?: PipelineReadyCondition;

  @SpeakeasyMetadata({ data: "json, name=targetsPresentCondition" })
  targetsPresentCondition?: TargetsPresentCondition;
}
