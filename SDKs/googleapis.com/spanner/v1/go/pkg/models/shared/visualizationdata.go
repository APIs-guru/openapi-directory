package shared

type VisualizationDataKeyUnitEnum string

const (
	VisualizationDataKeyUnitEnumKeyUnitUnspecified VisualizationDataKeyUnitEnum = "KEY_UNIT_UNSPECIFIED"
	VisualizationDataKeyUnitEnumKey                VisualizationDataKeyUnitEnum = "KEY"
	VisualizationDataKeyUnitEnumChunk              VisualizationDataKeyUnitEnum = "CHUNK"
)

type VisualizationData struct {
	DataSourceEndToken       *string                       `json:"dataSourceEndToken"`
	DataSourceSeparatorToken *string                       `json:"dataSourceSeparatorToken"`
	DiagnosticMessages       []DiagnosticMessage           `json:"diagnosticMessages"`
	EndKeyStrings            []string                      `json:"endKeyStrings"`
	HasPii                   *bool                         `json:"hasPii"`
	IndexedKeys              []string                      `json:"indexedKeys"`
	KeySeparator             *string                       `json:"keySeparator"`
	KeyUnit                  *VisualizationDataKeyUnitEnum `json:"keyUnit"`
	Metrics                  []Metric                      `json:"metrics"`
	PrefixNodes              []PrefixNode                  `json:"prefixNodes"`
}
