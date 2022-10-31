package shared




type ReadOptionsReadConsistencyEnum string

const (
    ReadOptionsReadConsistencyEnumReadConsistencyUnspecified ReadOptionsReadConsistencyEnum = "READ_CONSISTENCY_UNSPECIFIED"
ReadOptionsReadConsistencyEnumStrong ReadOptionsReadConsistencyEnum = "STRONG"
ReadOptionsReadConsistencyEnumEventual ReadOptionsReadConsistencyEnum = "EVENTUAL"
)


type ReadOptions struct {
    ReadConsistency *ReadOptionsReadConsistencyEnum `json:"readConsistency,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    Transaction *string `json:"transaction,omitempty"`
    
}

