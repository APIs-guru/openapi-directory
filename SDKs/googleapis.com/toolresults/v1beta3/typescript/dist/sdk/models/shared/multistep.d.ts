import { SpeakeasyBase } from "../../../internal/utils";
import { PrimaryStep } from "./primarystep";
/**
 * Details when multiple steps are run with the same configuration as a group.
**/
export declare class MultiStep extends SpeakeasyBase {
    multistepNumber?: number;
    primaryStep?: PrimaryStep;
    primaryStepId?: string;
}
