import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineReadyCondition } from "./pipelinereadycondition";
import { TargetsPresentCondition } from "./targetspresentcondition";


// PipelineCondition
/** 
 * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
**/
export class PipelineCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineReadyCondition" })
  pipelineReadyCondition?: PipelineReadyCondition;

  @Metadata({ data: "json, name=targetsPresentCondition" })
  targetsPresentCondition?: TargetsPresentCondition;
}
