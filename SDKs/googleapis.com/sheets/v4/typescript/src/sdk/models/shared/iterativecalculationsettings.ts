import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IterativeCalculationSettings
/** 
 * Settings to control how circular dependencies are resolved with iterative calculation.
**/
export class IterativeCalculationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=convergenceThreshold" })
  convergenceThreshold?: number;

  @Metadata({ data: "json, name=maxIterations" })
  maxIterations?: number;
}
