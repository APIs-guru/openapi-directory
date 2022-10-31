package shared



type CounterUpdate struct {
    Boolean *bool `json:"boolean,omitempty"`
    Cumulative *bool `json:"cumulative,omitempty"`
    Distribution *DistributionUpdate `json:"distribution,omitempty"`
    FloatingPoint *float64 `json:"floatingPoint,omitempty"`
    FloatingPointList *FloatingPointList `json:"floatingPointList,omitempty"`
    FloatingPointMean *FloatingPointMean `json:"floatingPointMean,omitempty"`
    Integer *SplitInt64 `json:"integer,omitempty"`
    IntegerGauge *IntegerGauge `json:"integerGauge,omitempty"`
    IntegerList *IntegerList `json:"integerList,omitempty"`
    IntegerMean *IntegerMean `json:"integerMean,omitempty"`
    Internal *interface{} `json:"internal,omitempty"`
    NameAndKind *NameAndKind `json:"nameAndKind,omitempty"`
    ShortID *string `json:"shortId,omitempty"`
    StringList *StringList `json:"stringList,omitempty"`
    StructuredNameAndMetadata *CounterStructuredNameAndMetadata `json:"structuredNameAndMetadata,omitempty"`
    
}

