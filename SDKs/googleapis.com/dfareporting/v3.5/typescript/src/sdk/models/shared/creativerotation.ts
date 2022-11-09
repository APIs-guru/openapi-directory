import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeAssignment } from "./creativeassignment";

export enum CreativeRotationTypeEnum {
    CreativeRotationTypeSequential = "CREATIVE_ROTATION_TYPE_SEQUENTIAL"
,    CreativeRotationTypeRandom = "CREATIVE_ROTATION_TYPE_RANDOM"
}

export enum CreativeRotationWeightCalculationStrategyEnum {
    WeightStrategyEqual = "WEIGHT_STRATEGY_EQUAL"
,    WeightStrategyCustom = "WEIGHT_STRATEGY_CUSTOM"
,    WeightStrategyHighestCtr = "WEIGHT_STRATEGY_HIGHEST_CTR"
,    WeightStrategyOptimized = "WEIGHT_STRATEGY_OPTIMIZED"
}


// CreativeRotation
/** 
 * Creative Rotation.
**/
export class CreativeRotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeAssignments", elemType: shared.CreativeAssignment })
  creativeAssignments?: CreativeAssignment[];

  @Metadata({ data: "json, name=creativeOptimizationConfigurationId" })
  creativeOptimizationConfigurationId?: string;

  @Metadata({ data: "json, name=type" })
  type?: CreativeRotationTypeEnum;

  @Metadata({ data: "json, name=weightCalculationStrategy" })
  weightCalculationStrategy?: CreativeRotationWeightCalculationStrategyEnum;
}
