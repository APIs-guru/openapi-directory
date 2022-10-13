package shared

type TransformSummaryKindEnum string

const (
	TransformSummaryKindEnumUnknownKind    TransformSummaryKindEnum = "UNKNOWN_KIND"
	TransformSummaryKindEnumParDoKind      TransformSummaryKindEnum = "PAR_DO_KIND"
	TransformSummaryKindEnumGroupByKeyKind TransformSummaryKindEnum = "GROUP_BY_KEY_KIND"
	TransformSummaryKindEnumFlattenKind    TransformSummaryKindEnum = "FLATTEN_KIND"
	TransformSummaryKindEnumReadKind       TransformSummaryKindEnum = "READ_KIND"
	TransformSummaryKindEnumWriteKind      TransformSummaryKindEnum = "WRITE_KIND"
	TransformSummaryKindEnumConstantKind   TransformSummaryKindEnum = "CONSTANT_KIND"
	TransformSummaryKindEnumSingletonKind  TransformSummaryKindEnum = "SINGLETON_KIND"
	TransformSummaryKindEnumShuffleKind    TransformSummaryKindEnum = "SHUFFLE_KIND"
)

type TransformSummary struct {
	DisplayData          []DisplayData             `json:"displayData"`
	ID                   *string                   `json:"id"`
	InputCollectionName  []string                  `json:"inputCollectionName"`
	Kind                 *TransformSummaryKindEnum `json:"kind"`
	Name                 *string                   `json:"name"`
	OutputCollectionName []string                  `json:"outputCollectionName"`
}
