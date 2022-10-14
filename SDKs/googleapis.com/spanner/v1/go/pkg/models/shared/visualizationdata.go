package shared

type VisualizationDataKeyUnitEnum string

const (
	VisualizationDataKeyUnitEnumKeyUnitUnspecified VisualizationDataKeyUnitEnum = "KEY_UNIT_UNSPECIFIED"
	VisualizationDataKeyUnitEnumKey                VisualizationDataKeyUnitEnum = "KEY"
	VisualizationDataKeyUnitEnumChunk              VisualizationDataKeyUnitEnum = "CHUNK"
)

type VisualizationData struct {
	DataSourceEndToken       *string                       `json:"dataSourceEndToken,omitempty"`
	DataSourceSeparatorToken *string                       `json:"dataSourceSeparatorToken,omitempty"`
	DiagnosticMessages       []DiagnosticMessage           `json:"diagnosticMessages,omitempty"`
	EndKeyStrings            []string                      `json:"endKeyStrings,omitempty"`
	HasPii                   *bool                         `json:"hasPii,omitempty"`
	IndexedKeys              []string                      `json:"indexedKeys,omitempty"`
	KeySeparator             *string                       `json:"keySeparator,omitempty"`
	KeyUnit                  *VisualizationDataKeyUnitEnum `json:"keyUnit,omitempty"`
	Metrics                  []Metric                      `json:"metrics,omitempty"`
	PrefixNodes              []PrefixNode                  `json:"prefixNodes,omitempty"`
}
