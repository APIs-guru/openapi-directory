import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrimaryStep } from "./primarystep";


// MultiStep
/** 
 * Details when multiple steps are run with the same configuration as a group.
**/
export class MultiStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=multistepNumber" })
  multistepNumber?: number;

  @Metadata({ data: "json, name=primaryStep" })
  primaryStep?: PrimaryStep;

  @Metadata({ data: "json, name=primaryStepId" })
  primaryStepId?: string;
}
