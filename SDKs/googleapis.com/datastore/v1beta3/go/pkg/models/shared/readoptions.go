package shared

type ReadOptionsReadConsistencyEnum string

const (
	ReadOptionsReadConsistencyEnumReadConsistencyUnspecified ReadOptionsReadConsistencyEnum = "READ_CONSISTENCY_UNSPECIFIED"
	ReadOptionsReadConsistencyEnumStrong                     ReadOptionsReadConsistencyEnum = "STRONG"
	ReadOptionsReadConsistencyEnumEventual                   ReadOptionsReadConsistencyEnum = "EVENTUAL"
)

type ReadOptions struct {
	ReadConsistency *ReadOptionsReadConsistencyEnum `json:"readConsistency"`
	ReadTime        *string                         `json:"readTime"`
	Transaction     *string                         `json:"transaction"`
}
