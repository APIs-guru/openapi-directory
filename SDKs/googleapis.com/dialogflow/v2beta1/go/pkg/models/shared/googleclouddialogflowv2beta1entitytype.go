package shared

type GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum string

const (
	GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeUnspecified GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum = "AUTO_EXPANSION_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeDefault     GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum = "AUTO_EXPANSION_MODE_DEFAULT"
)

type GoogleCloudDialogflowV2beta1EntityTypeKindEnum string

const (
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindUnspecified GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindMap         GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_MAP"
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindList        GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_LIST"
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindRegexp      GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_REGEXP"
)

// GoogleCloudDialogflowV2beta1EntityType
// Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
type GoogleCloudDialogflowV2beta1EntityType struct {
	AutoExpansionMode     *GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum `json:"autoExpansionMode,omitempty"`
	DisplayName           *string                                                      `json:"displayName,omitempty"`
	EnableFuzzyExtraction *bool                                                        `json:"enableFuzzyExtraction,omitempty"`
	Entities              []GoogleCloudDialogflowV2beta1EntityTypeEntity               `json:"entities,omitempty"`
	Kind                  *GoogleCloudDialogflowV2beta1EntityTypeKindEnum              `json:"kind,omitempty"`
	Name                  *string                                                      `json:"name,omitempty"`
}
