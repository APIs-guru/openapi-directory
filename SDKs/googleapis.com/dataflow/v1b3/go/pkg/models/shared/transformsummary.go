package shared




type TransformSummaryKindEnum string

const (
    TransformSummaryKindEnumUnknownKind TransformSummaryKindEnum = "UNKNOWN_KIND"
TransformSummaryKindEnumParDoKind TransformSummaryKindEnum = "PAR_DO_KIND"
TransformSummaryKindEnumGroupByKeyKind TransformSummaryKindEnum = "GROUP_BY_KEY_KIND"
TransformSummaryKindEnumFlattenKind TransformSummaryKindEnum = "FLATTEN_KIND"
TransformSummaryKindEnumReadKind TransformSummaryKindEnum = "READ_KIND"
TransformSummaryKindEnumWriteKind TransformSummaryKindEnum = "WRITE_KIND"
TransformSummaryKindEnumConstantKind TransformSummaryKindEnum = "CONSTANT_KIND"
TransformSummaryKindEnumSingletonKind TransformSummaryKindEnum = "SINGLETON_KIND"
TransformSummaryKindEnumShuffleKind TransformSummaryKindEnum = "SHUFFLE_KIND"
)


type TransformSummary struct {
    DisplayData []DisplayData `json:"displayData,omitempty"`
    ID *string `json:"id,omitempty"`
    InputCollectionName []string `json:"inputCollectionName,omitempty"`
    Kind *TransformSummaryKindEnum `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    OutputCollectionName []string `json:"outputCollectionName,omitempty"`
    
}

