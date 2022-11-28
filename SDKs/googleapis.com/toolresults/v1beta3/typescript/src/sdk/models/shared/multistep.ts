import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrimaryStep } from "./primarystep";



// MultiStep
/** 
 * Details when multiple steps are run with the same configuration as a group.
**/
export class MultiStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=multistepNumber" })
  multistepNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=primaryStep" })
  primaryStep?: PrimaryStep;

  @SpeakeasyMetadata({ data: "json, name=primaryStepId" })
  primaryStepId?: string;
}
