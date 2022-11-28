import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IterativeCalculationSettings
/** 
 * Settings to control how circular dependencies are resolved with iterative calculation.
**/
export class IterativeCalculationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=convergenceThreshold" })
  convergenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=maxIterations" })
  maxIterations?: number;
}
