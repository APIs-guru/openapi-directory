import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeAssignment } from "./creativeassignment";
export declare enum CreativeRotationTypeEnum {
    CreativeRotationTypeSequential = "CREATIVE_ROTATION_TYPE_SEQUENTIAL",
    CreativeRotationTypeRandom = "CREATIVE_ROTATION_TYPE_RANDOM"
}
export declare enum CreativeRotationWeightCalculationStrategyEnum {
    WeightStrategyEqual = "WEIGHT_STRATEGY_EQUAL",
    WeightStrategyCustom = "WEIGHT_STRATEGY_CUSTOM",
    WeightStrategyHighestCtr = "WEIGHT_STRATEGY_HIGHEST_CTR",
    WeightStrategyOptimized = "WEIGHT_STRATEGY_OPTIMIZED"
}
/**
 * Creative Rotation.
**/
export declare class CreativeRotation extends SpeakeasyBase {
    creativeAssignments?: CreativeAssignment[];
    creativeOptimizationConfigurationId?: string;
    type?: CreativeRotationTypeEnum;
    weightCalculationStrategy?: CreativeRotationWeightCalculationStrategyEnum;
}
