package shared

type CounterUpdate struct {
	Boolean                   *bool                             `json:"boolean"`
	Cumulative                *bool                             `json:"cumulative"`
	Distribution              *DistributionUpdate               `json:"distribution"`
	FloatingPoint             *float64                          `json:"floatingPoint"`
	FloatingPointList         *FloatingPointList                `json:"floatingPointList"`
	FloatingPointMean         *FloatingPointMean                `json:"floatingPointMean"`
	Integer                   *SplitInt64                       `json:"integer"`
	IntegerGauge              *IntegerGauge                     `json:"integerGauge"`
	IntegerList               *IntegerList                      `json:"integerList"`
	IntegerMean               *IntegerMean                      `json:"integerMean"`
	Internal                  *interface{}                      `json:"internal"`
	NameAndKind               *NameAndKind                      `json:"nameAndKind"`
	ShortID                   *string                           `json:"shortId"`
	StringList                *StringList                       `json:"stringList"`
	StructuredNameAndMetadata *CounterStructuredNameAndMetadata `json:"structuredNameAndMetadata"`
}
