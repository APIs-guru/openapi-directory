import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings to control how circular dependencies are resolved with iterative calculation.
**/
export declare class IterativeCalculationSettings extends SpeakeasyBase {
    convergenceThreshold?: number;
    maxIterations?: number;
}
