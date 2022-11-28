import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeAssignment } from "./creativeassignment";


export enum CreativeRotationTypeEnum {
    CreativeRotationTypeSequential = "CREATIVE_ROTATION_TYPE_SEQUENTIAL",
    CreativeRotationTypeRandom = "CREATIVE_ROTATION_TYPE_RANDOM"
}

export enum CreativeRotationWeightCalculationStrategyEnum {
    WeightStrategyEqual = "WEIGHT_STRATEGY_EQUAL",
    WeightStrategyCustom = "WEIGHT_STRATEGY_CUSTOM",
    WeightStrategyHighestCtr = "WEIGHT_STRATEGY_HIGHEST_CTR",
    WeightStrategyOptimized = "WEIGHT_STRATEGY_OPTIMIZED"
}


// CreativeRotation
/** 
 * Creative Rotation.
**/
export class CreativeRotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeAssignments", elemType: CreativeAssignment })
  creativeAssignments?: CreativeAssignment[];

  @SpeakeasyMetadata({ data: "json, name=creativeOptimizationConfigurationId" })
  creativeOptimizationConfigurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreativeRotationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=weightCalculationStrategy" })
  weightCalculationStrategy?: CreativeRotationWeightCalculationStrategyEnum;
}
