package shared

type ExecutionStageSummaryKindEnum string

const (
	ExecutionStageSummaryKindEnumUnknownKind    ExecutionStageSummaryKindEnum = "UNKNOWN_KIND"
	ExecutionStageSummaryKindEnumParDoKind      ExecutionStageSummaryKindEnum = "PAR_DO_KIND"
	ExecutionStageSummaryKindEnumGroupByKeyKind ExecutionStageSummaryKindEnum = "GROUP_BY_KEY_KIND"
	ExecutionStageSummaryKindEnumFlattenKind    ExecutionStageSummaryKindEnum = "FLATTEN_KIND"
	ExecutionStageSummaryKindEnumReadKind       ExecutionStageSummaryKindEnum = "READ_KIND"
	ExecutionStageSummaryKindEnumWriteKind      ExecutionStageSummaryKindEnum = "WRITE_KIND"
	ExecutionStageSummaryKindEnumConstantKind   ExecutionStageSummaryKindEnum = "CONSTANT_KIND"
	ExecutionStageSummaryKindEnumSingletonKind  ExecutionStageSummaryKindEnum = "SINGLETON_KIND"
	ExecutionStageSummaryKindEnumShuffleKind    ExecutionStageSummaryKindEnum = "SHUFFLE_KIND"
)

type ExecutionStageSummary struct {
	ComponentSource    []ComponentSource              `json:"componentSource"`
	ComponentTransform []ComponentTransform           `json:"componentTransform"`
	ID                 *string                        `json:"id"`
	InputSource        []StageSource                  `json:"inputSource"`
	Kind               *ExecutionStageSummaryKindEnum `json:"kind"`
	Name               *string                        `json:"name"`
	OutputSource       []StageSource                  `json:"outputSource"`
	PrerequisiteStage  []string                       `json:"prerequisiteStage"`
}
