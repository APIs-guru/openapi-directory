package shared

type CreativeRotationTypeEnum string

const (
	CreativeRotationTypeEnumCreativeRotationTypeSequential CreativeRotationTypeEnum = "CREATIVE_ROTATION_TYPE_SEQUENTIAL"
	CreativeRotationTypeEnumCreativeRotationTypeRandom     CreativeRotationTypeEnum = "CREATIVE_ROTATION_TYPE_RANDOM"
)

type CreativeRotationWeightCalculationStrategyEnum string

const (
	CreativeRotationWeightCalculationStrategyEnumWeightStrategyEqual      CreativeRotationWeightCalculationStrategyEnum = "WEIGHT_STRATEGY_EQUAL"
	CreativeRotationWeightCalculationStrategyEnumWeightStrategyCustom     CreativeRotationWeightCalculationStrategyEnum = "WEIGHT_STRATEGY_CUSTOM"
	CreativeRotationWeightCalculationStrategyEnumWeightStrategyHighestCtr CreativeRotationWeightCalculationStrategyEnum = "WEIGHT_STRATEGY_HIGHEST_CTR"
	CreativeRotationWeightCalculationStrategyEnumWeightStrategyOptimized  CreativeRotationWeightCalculationStrategyEnum = "WEIGHT_STRATEGY_OPTIMIZED"
)

type CreativeRotation struct {
	CreativeAssignments                 []CreativeAssignment                           `json:"creativeAssignments,omitempty"`
	CreativeOptimizationConfigurationID *string                                        `json:"creativeOptimizationConfigurationId,omitempty"`
	Type                                *CreativeRotationTypeEnum                      `json:"type,omitempty"`
	WeightCalculationStrategy           *CreativeRotationWeightCalculationStrategyEnum `json:"weightCalculationStrategy,omitempty"`
}
